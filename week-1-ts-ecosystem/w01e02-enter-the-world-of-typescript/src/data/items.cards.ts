import { Cards } from '@/types/Card.type';
import { CURRENCY } from '@/utils/currency.utils';

export const items: Cards = [
  {
    name: 'Tomatoes',
    amount: 2,
    unit: 'kg',
    price: { value: 20, currency: CURRENCY.PLN },
  },
  {
    name: 'Banana',
    amount: 5,
    unit: 'kg',
    price: { value: 36, currency: CURRENCY.PLN },
  },
];
