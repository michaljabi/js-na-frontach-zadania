import { Price } from 'Price'

export interface Item {
  name: string;
  amount: number;
  unit: string;
  price: Price
}
// name, amount, unit, price