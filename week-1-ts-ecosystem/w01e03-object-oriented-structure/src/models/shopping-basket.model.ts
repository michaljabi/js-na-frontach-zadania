import { NewProductArgs, ProductType } from '../types';
import { Product } from './product.model';
import { v4 as uuidv4 } from 'uuid';

export class ShoppingBasket<Type extends ProductType> {
  #products: Product<Type>[] = [];

  get total(): number {
    return this.#products.length;
  }

  get totalPrice(): number {
    return this.#products.reduce((total, product) => total + product.price, 0);
  }

  getProducts(): Product<Type>[] {
    return this.#products;
  }

  getProductById(id: string): Product<Type> | undefined {
    return this.#products.find((product) => product.id === id);
  }

  addProduct(product: NewProductArgs<Type>) {
    const price = product.type === ProductType.Free ? 0 : product.price;
    const id = uuidv4();

    this.#products.push(new Product<Type>(product.name, id, price, product.type));
  }

  updateProductById(id: string, data: Omit<Partial<Product<Type>>, 'id'>): void {
    const product = this.#products.find((product) => product.id === id);

    if (product) {
      product.update(data);
    }
  }

  removeProductById(id: string): void {
    const productIndex = this.#products.findIndex((product) => product.id === id);
    this.#products.splice(productIndex, 1);
  }
}
