import { CartItem } from '../shared/types/cartItem.interface';

export const cartItems: CartItem[] = [
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