import { Item } from "./Item";

export class BuyNowItem extends Item {
  value: number;
  currency: string;
  fastShopping: boolean;
  constructor(name: string, amount: number, value: number, currency: string = "PLN") {
    super(name, amount);
    this.value = value;
    this.currency = currency;
    this.fastShopping = true;
  }
  get totalValue() {
    return this.value * this.amount;
  }
  print(): void {
    console.log(`nazwa: ${this.name}, cena: ${this.value}, ilość: ${this.amount}, wartość: ${this.totalValue}`);
  }
}
