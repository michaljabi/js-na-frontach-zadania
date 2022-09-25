import {ProductType} from '../product/product.types';
import {Product} from '../product/product';

export class Cart<Type extends ProductType> {
  #products: Product<Type>[] = [];

  get items() {
    return this.#products;
  }

  set items(products: Product<Type>[]) {
    this.#products = products;
  }

  addProduct(product: Product<Type>) {
    const existingProduct = this.getProduct(product.id);
    if(existingProduct) {
      return this.updateProduct(existingProduct.id, {quantity: existingProduct.quantity + product.quantity})
    }
    this.#products.push(product);
  }

  getProduct(id: string) {
    return this.#products.find((product) => product.id === id);
  }

  updateProduct(id: string, updatedProduct: Partial<Omit<Product<Type>, "id">>) {
    const index = this.#products.findIndex((product) => product.id === id);
    if(index === -1) throw new Error("Not found");
    this.#products[index] = {...this.#products[index], ...updatedProduct}
  }

  removeProduct(id: string) {
    const productToRemoveIndex = this.#products.findIndex((product) => product.id === id);
    if(productToRemoveIndex === -1) throw new Error(`Not found product with provided id ${id}`);
    this.#products.splice(productToRemoveIndex, 1);
  }

  getProductsCount(){
    return this.#products.length;
  }

  getTotalPriceSum(){
    return this.#products.reduce((result, next) => next.price ? result + (next.price * next.quantity) : 0, 0)
  }
}