export type ProductType = "BUY_NOW" | "ON_AUCTION" | "FOR_FREE";

export interface UpdateProductDTO {
  name?: string;
  quantity?: number;
  price?: number;
}

export class Product {
  #id: number;
  #name: string;
  #quantity: number;
  #price: number;
  #type: ProductType;

  constructor(
    id: number,
    name: string,
    quantity: number,
    price: number,
    type: ProductType
  ) {
    this.#id = id;
    this.#name = name;
    this.#quantity = quantity;
    if (type === "FOR_FREE" && price > 0) {
      throw new Error(`Free product can't cost more than 0.`);
    }
    this.#price = price;
    this.#type = type;
  }

  get id(): number {
    return this.#id;
  }

  get name(): string {
    return this.#name;
  }

  set name(name: string) {
    if (name && /^[a-z0-9 ]+$/i.test(name)) {
      this.#name = name;
    } else {
      throw new Error("Name can't be empty.");
    }
  }

  get quantity(): number {
    return this.#quantity;
  }

  set quantity(quantity: number) {
    if (quantity > 0) {
      this.#quantity = quantity;
    } else {
      throw new Error("Quantity must be greater than 0.");
    }
  }

  get price(): number {
    return this.#price;
  }

  set price(price: number) {
    if (price >= 0) {
      this.#price = price;
    } else {
      throw new Error("Price must be at least 0.");
    }
  }

  get type(): ProductType {
    return this.#type;
  }

  set type(type: ProductType) {
    this.#type = type;
  }

  toString() {
    return `Product:#${this.#id} ${this.#name}\n\t#id: ${this.#id}\n\t#name: ${
      this.#name
    }\n\t#quantity: ${this.#quantity}\n\t#price: ${this.#price}\n\t#type: ${
      this.#type
    },\n`;
  }
}
