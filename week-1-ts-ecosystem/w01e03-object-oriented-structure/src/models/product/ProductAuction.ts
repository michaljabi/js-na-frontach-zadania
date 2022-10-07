import { PRODUCT_TYPE } from './Product';
import { ProductWithPrice } from './ProductWithPrice';

class ProductAuction extends ProductWithPrice {
  public readonly type: PRODUCT_TYPE = PRODUCT_TYPE.auction;

  public constructor(name: string, price: number, amount: number) {
    super({ name, price, amount });
  }
}

export { ProductAuction };
