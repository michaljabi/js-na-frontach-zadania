import {ProductType} from './product.types';

export abstract class BaseProduct {
  id: string;
  name: string;
  quantity: number;
  type: ProductType;
  price?: number | never;

  protected constructor({id, name, quantity, type, price}: BaseProduct) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.type = type;
    if(price) {
      this.price = price;
    }
  }
}

export class BuyNowProduct extends BaseProduct {
  type: ProductType = "BUY NOW";
  price: number;

  constructor({price, ...baseProduct}: BuyNowProduct) {
    super(baseProduct);
    this.price = price;
  }
}

export class AuctionProduct extends BaseProduct {
  type: ProductType = "AUCTION";
  price: number;

  constructor({price, ...baseProduct}: AuctionProduct) {
    super(baseProduct);
    this.price = price;
  }
}

export class FreeProduct extends BaseProduct {
  type: ProductType = "FREE";

  constructor(baseProduct: FreeProduct) {
    super(baseProduct);
  }
}