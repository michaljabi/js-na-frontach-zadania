import { ICart, IProduct, ProductType } from './types';

export class Cart implements ICart {
  private products: IProduct[] = [];

  constructor(private cartType: ProductType) {}

  addProduct = (newProduct: IProduct): void => {
    if (newProduct.type === this.cartType) {
      this.products.push(newProduct);
    } else {
      throw 'Product type is not compatible with the cart type';
    }
  };

  deleteProductById(id: string): void {
    this.products.filter((product) => product.id === id);
  }

  getAllProducts(): IProduct[] {
    return this.products;
  }

  getCartItemsQuantity(): number {
    return this.products.length;
  }

  getProductById(id: string): IProduct | undefined {
    return this.products.find((product) => product.id === id);
  }

  getTotalCost(): number {
    return this.products.reduce((acc, curr) => acc + (curr.price?.value ?? 0), 0);
  }

  updateProductById(id: string, productUpdated: IProduct): void {
    this.products = this.products.map((product) => {
      if (product.id === id) {
        product = {
          ...productUpdated,
        };
      }
      return product;
    });
  }
}
