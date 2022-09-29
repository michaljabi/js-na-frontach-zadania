import { Item } from "./Item";

export class AuctionItem extends Item {
  time: number;
  value: number;
  currency: string;
  constructor(name: string, amount: number, time: number, value: number, currency: string = "PLN") {
    super(name, amount);
    this.time = time;
    this.value = value;
    this.currency = currency;
  }
  getTimeEndAuction() {
    return new Date(this.time);
  }
  print() {
    console.log(`nazwa: ${this.name}, cena: ${this.value}, ilość: ${this.amount}, wartość: ${this.value * this.amount}`);
  }
}
