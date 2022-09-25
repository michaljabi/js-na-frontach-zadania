import { Product } from "./product";
import { AuctionType } from "./product-types";

export class ShoppingCart {
  auctionType: AuctionType;
  #products: Product[];

  constructor(auctionType: AuctionType) {
    this.auctionType = auctionType;
    this.#products = [];
  }

  getProducts() {
    return this.#products;
  }

  getSingleProduct(id: string) {
    return this.#products.find((product) => product.id === id);
  }

  addProduct(product: Product) {
    if (this.auctionType !== product.auction) {
      throw Error("Wrong type of product");
    }
    this.#products.push(product);
  }

  removeProduct(id: string) {
    this.#products = this.#products.filter((product) => product.id !== id);
  }

  editProduct(id: string, newProduct: Product) {
    this.#products = this.#products.map((product) =>
      product.id === id ? newProduct : product
    );
  }

  getCartTotalPrice() {
    if (this.auctionType === AuctionType.free) return "Products are free";

    return this.#products.reduce(
      (acc, curr) => (curr.price ? acc + curr.price : 0),
      0
    );
  }

  getCartQuantity() {
    return this.#products.length;
  }
}
