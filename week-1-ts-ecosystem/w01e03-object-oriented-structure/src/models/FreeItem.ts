import { Item } from "./Item";

export class FreeItem extends Item {
  value: undefined;
  currency: undefined;
  constructor(name: string, amount: number) {
    super(name, amount);
  }
  print(): void {
    console.log(`nazwa: ${this.name}, ilość: ${this.amount}`);
  }
}
