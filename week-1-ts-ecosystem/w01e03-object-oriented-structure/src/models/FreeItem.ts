import { Item } from "./Item";

export class FreeItem extends Item {
  value: undefined;
  currency: undefined;
  constructor(name: string, amount: number) {
    super(name, amount);
  }
  get totalValue() {
    return 0;
  }
  print(): void {
    console.log(`nazwa: ${this.name}, ilość: ${this.amount}`);
  }
}
