import { ProductType, UpdateProductArgs } from '../types';

export class Product<Type extends ProductType> {
  #name: string;
  #id: string;
  #price: number;
  #type: Type;

  constructor(name: string, id: string, price: number, type: Type) {
    this.#name = name;
    this.#id = id;
    this.#price = price;
    this.#type = type;
  }

  get name(): string {
    return this.#name;
  }

  get id(): string {
    return this.#id;
  }

  get price(): number {
    return this.#price;
  }

  get type(): Type {
    return this.#type;
  }

  update(data: UpdateProductArgs<Type>) {
    if (data.name) {
      this.#name = data.name;
    }

    if (data.price) {
      this.#price = data.type === ProductType.Free ? 0 : data.price;
    }

    if (data.type) {
      this.#type = data.type;
    }
  }
}
