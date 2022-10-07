import { v4 } from 'uuid';

enum PRODUCT_TYPE {
  buyNow = 'buyNow',
  auction = 'auction',
  free = 'free',
}

abstract class Product {
  public readonly id: string;
  public name: string;
  private _amount = 1;

  public constructor({ name, amount }: Pick<Product, 'name' | 'amount'>) {
    this.id = v4();
    this.name = name;
    this.amount = amount;
  }

  public set amount(value: number) {
    if (value >= 1) {
      this._amount = value;
    } else {
      throw Error('Invalid amount');
    }
  }

  public getAmount(): number {
    return this._amount;
  }

  public update({
    name,
    amount,
  }: Partial<Pick<Product, 'name' | 'amount'>>): void {
    if (name) {
      this.name = name;
    }

    if (amount) {
      this.amount = amount;
    }
  }
}

export { Product, PRODUCT_TYPE };
