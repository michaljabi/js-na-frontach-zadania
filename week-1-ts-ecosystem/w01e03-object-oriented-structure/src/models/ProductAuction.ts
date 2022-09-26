import { PRODUCT_TYPE } from './Product.types';
import { Product } from './Product';

class ProductAuction extends Product {
  constructor(name: string, price: number) {
    super(name, PRODUCT_TYPE.auction, price);
  }
}

export { ProductAuction };
