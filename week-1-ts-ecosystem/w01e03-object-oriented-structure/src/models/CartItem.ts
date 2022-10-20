import { v4 as uuidv4 } from 'uuid';

export class CartItem {
  readonly id: string;
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.id = uuidv4();
    this.name = name;
    this.price = price;
  }
}
