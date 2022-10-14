import { v4 as uuidv4 } from "uuid";
export abstract class Item {
  readonly id: string;
  name: string;
  amount: number;
  constructor(name: string, amount: number) {
    this.id = uuidv4();
    this.name = name;
    this.amount = amount;
  }
  abstract print(): void;
}
