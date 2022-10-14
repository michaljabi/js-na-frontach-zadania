import { Item } from "./Item";

export class FreeItem extends Item {
  constructor(name: string, amount: number) {
    super(name, amount);
  }
  print(): void {
    console.log(`nazwa: ${this.name}, ilość: ${this.amount}`);
  }
}
