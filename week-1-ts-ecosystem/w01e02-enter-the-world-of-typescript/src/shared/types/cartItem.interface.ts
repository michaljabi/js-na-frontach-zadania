import { Price } from './price.interface';

export interface CartItem {
  price: Price;
  name: string;
  amount: string;
  unit: string;
}
