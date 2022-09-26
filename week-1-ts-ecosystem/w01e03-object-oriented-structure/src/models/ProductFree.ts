import { PRODUCT_TYPE } from './Product.types';
import { Product } from './Product';

class ProductFree extends Product {
  constructor(name: string) {
    super(name, PRODUCT_TYPE.free);
  }
}

export { ProductFree };
