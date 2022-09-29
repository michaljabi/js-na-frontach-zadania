import { Item } from "./Item";

export class NowItem extends Item {
  value: number;
  currency: string;
  fastShopping: boolean;
  constructor(name: string, amount: number, value: number, currency: string = "PLN") {
    super(name, amount);
    this.value = value;
    this.currency = currency;
    this.fastShopping = true;
  }
  print(): void {
    console.log(`nazwa: ${this.name}, cena: ${this.value}, ilość: ${this.amount}, wartość: ${this.value * this.amount}`);
  }
}
