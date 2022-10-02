export interface Item {
  name: string;
  amount: number;
  unit: Unit;
  price: Price;
}

export enum Unit {
  kg = "kg",
}

export enum Currency {
  pln = "PLN",
}

export interface Price {
  value: number;
  currency: Currency;
}
