import {  ProductType } from './types';
import { Product } from './product';

export class Cart {
  private products: Product[] = [];

  constructor(private cartType: ProductType) {}

  addProduct = (newProduct: Product): void => {
    if (newProduct.type === this.cartType) {
      this.products.push(newProduct);
    }
  };

  deleteProductById(id: string): void {
    this.products = this.products.filter((product) => product.id !== id);
  }

  getAllProducts(): readonly Product[] {
    return this.products;
  }

  getCartItemsQuantity(): number {
    return this.products.reduce((acc, curr) => acc + curr.quantity, 0);
  }

  getProductById(id: string): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  getTotalCost(): number {
    return this.products.reduce((acc, curr) => acc + curr.quantity * (curr.price?.value ?? 0), 0);
  }

  updateProductById(id: string, productUpdated: Partial<Product>): void {
    this.products = this.products.map((product) => {
      if (product.id === id) {
        product = {
          ...product,
          ...productUpdated,
        };
      }
      return product;
    });
  }
}
