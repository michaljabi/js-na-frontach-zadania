import { Product, ProductType } from "../product/product.module";

type currency = "PLN" | "USD" | "EUR";
export class ShoppingCart {
  #products: Product[] = [];
  #name: string;
  #currency: currency;
  #total: number = 0;
  #basketType: ProductType;
  constructor(name: string, currency: currency, basketType: ProductType) {
    this.#name = name;
    this.#currency = currency;
    this.#basketType = basketType;
  }
  addProduct(product: Product) {
    if (product.type !== this.#basketType) {
      console.warn("Product type and basket type are not matching");
    } else {
      this.#products.push(product);
      this.countTotal();
    }
  }
  removeProduct(productToRemove: Product) {
    const filteredProducts = this.#products.filter(
      (product) => product.id !== productToRemove.id
    );
    this.#products = filteredProducts;
    this.countTotal();
  }

  countTotal() {
    this.#total = this.#products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }
  displayTotalPrice() {
    console.log(
      `Total price for this Cart is ${this.#total} ${this.#currency}`
    );
  }
  getProductById(id: number) {
    const product = this.#products.find((product) => product.id === id);
    return product ?? "Product not found";
  }
  updateProduct(updatedProduct: Product) {
    const updatedProducts = this.#products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    this.#products = updatedProducts;
  }
  displayAllProducts() {
    console.info(this.#products);
  }
  getProductsCount() {
    return this.#products.length;
  }
  getTotalPrice() {
    this.#total = this.#products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }
}
