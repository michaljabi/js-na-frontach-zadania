import { v4 as uuidv4 } from 'uuid';

export class CartItem {
  readonly id: string;
  name: string;
  price: number;
  amount: number;

  constructor(name: string, amount: number, price: number) {
    this.id = uuidv4();
    this.name = name;
    this.price = price;
    this.amount = amount;
  }
}
