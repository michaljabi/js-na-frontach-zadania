import {v4} from 'uuid';
import {IProduct, IProductWithPrice, PRODUCT_TYPE} from './Product.types';

class Product {
  private readonly _id: string;
  private _name: string;
  private _amount: number;

  public constructor({ name, amount }: IProduct) {
    this._id = v4();
    this._name = name;
    this._amount = amount;
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get amount(): number {
    return this._amount;
  }

  public set amount(value: number) {
    if (value >= 1) {
      this._amount = value;
    } else {
      throw Error('Invalid amount');
    }
  }

  public update({ name, amount }: Partial<IProduct>): void {
    if (name) {
      this._name = name;
    }

    if (amount) {
      this._amount = amount;
    }
  }
}

class ProductWithPrice extends Product {
  private _price: number;

  public constructor({ price, ...product }: IProductWithPrice) {
    super(product);
    this._price = price;
  }

  public get price(): number {
    return this._price;
  }

  public update({  price, ...product }: Partial<IProductWithPrice>): void {
    super.update(product);
    if (price != null) {
      this._price = price;
    }
  }
}

class ProductAuction extends ProductWithPrice {
  private readonly _type: PRODUCT_TYPE = PRODUCT_TYPE.auction;

  public constructor(name: string, price: number, amount: number) {
    super({ name, price, amount });
  }
}

class ProductBuyNow extends ProductWithPrice {
  private _readonly: PRODUCT_TYPE = PRODUCT_TYPE.buyNow;

  public constructor(name: string, price: number, amount: number) {
    super({ name, price, amount });
  }
}

class ProductFree extends Product {
  private _readonly: PRODUCT_TYPE = PRODUCT_TYPE.free;

  public constructor(name: string, amount: number) {
    super({ name, amount });
  }
}

export {
  Product,
  ProductWithPrice,
  ProductAuction,
  ProductFree,
  ProductBuyNow,
};
