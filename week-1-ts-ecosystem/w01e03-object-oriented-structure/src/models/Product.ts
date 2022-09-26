import { v4 } from 'uuid';
import { PRODUCT_TYPE } from './Product.types';

class Product {
  private readonly _id: string;
  private readonly _name: string;
  private _price: number | null = null;
  private readonly _type: PRODUCT_TYPE;

  constructor(name: string, type: PRODUCT_TYPE, price?: number) {
    this._id = v4();
    this._name = name;
    this._type = type;

    if (price) {
      this._price = price || null;
    }
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get price(): number | null {
    return this._price || null;
  }

  set price(value: number | null) {
    this._price = value || null;
  }

  get type(): PRODUCT_TYPE {
    return this._type;
  }
}

export { Product };
