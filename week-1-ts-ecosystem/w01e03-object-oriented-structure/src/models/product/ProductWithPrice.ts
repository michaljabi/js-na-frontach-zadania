import { Product } from './Product';

abstract class ProductWithPrice extends Product {
  private _price = 0;

  public constructor({
    price,
    ...product
  }: Pick<ProductWithPrice, 'amount' | 'name' | 'price'>) {
    super(product as Product);
    this.price = price;
  }

  public set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw Error('Invalid price');
    }
  }

  public getPrice(): number {
    return this._price;
  }

  public update({
    price,
    ...product
  }: Partial<Pick<ProductWithPrice, 'amount' | 'name' | 'price'>>): void {
    super.update(product as Product);
    if (price != null) {
      this.price = price;
    }
  }
}

export { ProductWithPrice };
