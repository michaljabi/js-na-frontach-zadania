import { PRODUCT_TYPE } from './Product.types';
import { Product } from './Product';

class ProductBuyNow extends Product {
  constructor(name: string, price: number) {
    super(name, PRODUCT_TYPE.buyNow, price);
  }
}

export { ProductBuyNow };
