import { Price, ProductType } from './types';

export class Product {
  constructor(
    public type: ProductType,
    public id: string,
    public name: string,
    public quantity: number,
    public price?: Price,
  ) {}
}
