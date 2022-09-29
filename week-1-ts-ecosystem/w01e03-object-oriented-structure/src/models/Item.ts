export abstract class Item {
  readonly id: string;
  abstract value?: number;
  abstract currency?: string;
  name: string;
  amount: number;
  constructor(name: string, amount: number) {
    this.id = Math.round(Math.random() * Math.pow(10, 10)).toString(16);
    this.name = name;
    this.amount = amount;
  }
  abstract print(): void;
}
