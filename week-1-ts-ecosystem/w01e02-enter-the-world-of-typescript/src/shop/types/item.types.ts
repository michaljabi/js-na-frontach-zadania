export interface Item {
  name: string;
  amount: number;
  unit: string;
  price: Price;
}
export interface Price {
  value: number;
  currency: string;
}
