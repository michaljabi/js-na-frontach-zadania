import { Item } from "./Item";

export abstract class ValuedItem extends Item {
  abstract value?: number;
  abstract currency?: string;
  constructor(name: string, amount: number) {
    super(name, amount);
  }
  abstract print(): void;
}
