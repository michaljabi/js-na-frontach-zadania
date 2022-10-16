import { Product, ProductType, UpdateProductDTO } from "./Product";

type NonEmptyProductArray = [Product, ...Product[]];

export class Basket {
  name: string = "";
  #products: Product[] = [];
  type?: ProductType;
  public constructor(name: string);
  public constructor(name: string, products: NonEmptyProductArray);
  public constructor(name: string, products: undefined, type: ProductType);

  constructor(
    name: string,
    products?: NonEmptyProductArray,
    type?: ProductType
  ) {
    this.name = name;
    if (products && !type) {
      if (this.areProductsTypeConsistent(products)) {
        this.#products = products;
        this.type = products[0].type;
      } else {
        throw new Error(
          `Products are inconsistent in type. You can't create basket with different product types.`
        );
      }
    } else if (!products && type) {
      this.type = type;
    }
  }

  addProduct(product: Product) {
    if (!this.isProductTypeEqualBasketType(product.type)) {
      throw new Error(
        `You can't add product with type ${product.type} to basket with type ${this.type}. `
      );
    } else {
      this.#products.push(product);
      if (!this.type) {
        this.type = product.type;
      }
    }
    return product;
  }

  getProductById(id: number) {
    const product = this.#products.find((product) => product.id === id);
    if (product) {
      return product;
    } else {
      throw new Error("Product with given id not exist in basket.");
    }
  }

  updateProductById(id: number, body: UpdateProductDTO) {
    let product = this.getProductById(id);
    if (product) {
      if (body.name) product.name = body.name;
      if (body.price) product.price = body.price;
      if (body.quantity) product.quantity = body.quantity;
    }
    return product;
  }

  deleteProductById(id: number) {
    let product = this.getProductById(id);
    const productIndex = this.#products.findIndex(
      (product) => product.id === id
    );
    if (productIndex != -1) {
      this.#products.splice(productIndex, 1);
      if (!this.#products.length) {
        this.type = undefined;
      }
    }
    return product;
  }

  readAllProducts() {
    return this.#products.length > 0
      ? `[${this.#products.map((product) => product.toString())}]`
      : "[]";
  }

  getQuantityOfProducts() {
    return this.#products
      .map((product) => product.quantity)
      .reduce((prev, curr) => prev + curr, 0);
  }

  getSumOfProducts() {
    return this.#products
      .map((product) => product.price)
      .reduce((prev, curr) => prev + curr, 0);
  }

  isProductTypeEqualBasketType(productType: ProductType) {
    return this.type === undefined || productType === this.type;
  }

  areProductsTypeConsistent(products: Product[]) {
    const productsByType = products
      .map((product) => product.type)
      .reduce((acc, value) => {
        return { ...acc, [value]: (acc[value] || 0) + 1 };
      }, {} as Record<ProductType, number>);
    return (
      Object.keys(productsByType).length === 1 &&
      products.length === Object.values(productsByType)[0]
    );
  }

  toString() {
    return `Basket: ${this.name},\n#type: ${
      this.type
    },\n#products: [\n\t${this.readAllProducts()}\n]`;
  }
}
