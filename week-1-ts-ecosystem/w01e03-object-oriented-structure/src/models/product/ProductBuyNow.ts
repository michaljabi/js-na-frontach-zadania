import { ProductWithPrice } from './ProductWithPrice';
import { PRODUCT_TYPE } from './Product';

class ProductBuyNow extends ProductWithPrice {
  #type: PRODUCT_TYPE = PRODUCT_TYPE.buyNow;

  public constructor(name: string, price: number, amount: number) {
    super({ name, price, amount });
  }
}

export { ProductBuyNow };
