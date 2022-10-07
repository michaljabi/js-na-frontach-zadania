import { Product, PRODUCT_TYPE } from './Product';

class ProductFree extends Product {
  #type: PRODUCT_TYPE = PRODUCT_TYPE.free;

  public constructor(name: string, amount: number) {
    super({ name, amount });
  }
}

export { ProductFree };
