import { IPrice, IProduct, ProductType } from './types';

export class Product implements IProduct {
  constructor(
    public type: ProductType,
    public id: string,
    public name: string,
    public quantity: number,
    public price?: IPrice,
  ) {}
}
