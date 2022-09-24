export interface Price {
  value: number;
  currency: 'PLN' | 'USD' | 'EUR'; // TODO check required currencies
}

export interface Item {
  name: string;
  amount: number;
  unit: string;
  price: Price;
}
