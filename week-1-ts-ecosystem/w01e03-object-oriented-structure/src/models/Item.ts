import { v4 as uuidv4 } from "uuid";
export abstract class Item {
  readonly id: string;
  abstract value?: number | void;
  abstract currency?: string | void;
  name: string;
  amount: number;
  constructor(name: string, amount: number) {
    this.id = uuidv4();
    this.name = name;
    this.amount = amount;
  }
  abstract get totalValue(): number;
  abstract print(): void;
}
