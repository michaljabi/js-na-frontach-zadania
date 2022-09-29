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

export const items: Item[] = [
  {
    name: 'Tomatoes',
    amount: 2,
    unit: 'kg',
    price: { value: 20, currency: 'PLN' },
  },
  {
    name: 'Banana',
    amount: 5,
    unit: 'kg',
    price: { value: 36, currency: 'PLN' },
  },
];
