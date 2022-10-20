import { CartItem } from './CartItem';

export class Cart<Product extends CartItem> {
  private _products: Product[] = [];

  get products() {
    return this._products;
  }

  get allProductsCount() {
    return this._products.reduce((acc, product) => acc + product.amount, 0);
  }

  get totalPrice() {
    return this._products
      .reduce((acc, product) => acc + product.price * product.amount, 0)
      .toFixed(2);
  }

  addProduct(newProduct: Product) {
    const cartProductMatchingNewProduct = this._products.find(
      (product) =>
        product.name === newProduct.name && product.price === newProduct.price
    );
    if (!!cartProductMatchingNewProduct) {
      cartProductMatchingNewProduct.amount += newProduct.amount;
      return;
    }
    this._products = [newProduct, ...this._products];
  }

  getProduct(productId: string) {
    const product = this._products.find((product) => product.id === productId);
    if (!product) {
      throw new Error(`There is no product with this ID.`);
    }
    return product;
  }

  updateProduct(updatedProduct: Partial<Product> & Pick<Product, 'id'>) {
    let product = this._products.find(
      (product) => product.id === updatedProduct.id
    );
    if (!product) {
      throw new Error(`There is no product with this ID.`);
    }
    product = { ...product, ...updatedProduct };
  }

  deleteProduct() {}
}
