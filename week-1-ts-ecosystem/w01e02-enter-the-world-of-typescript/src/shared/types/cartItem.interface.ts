import { Price } from './price.interface';

export interface CartItem {
  price: Price;
  name: string;
  amount: number;
  unit: string;
}
