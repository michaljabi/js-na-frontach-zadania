export type Currency = 'PLN' | 'USD'
export type Unit = 'kg' | 'g'

export interface Price {
  value: number;
  currency: Currency;
}

export interface Item {
  name: string;
  amount: number;
  unit: Unit;
  price: Price;
}
