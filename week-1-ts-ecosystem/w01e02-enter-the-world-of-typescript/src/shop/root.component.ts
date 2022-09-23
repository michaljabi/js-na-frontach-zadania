import { Cards } from './../types/Card.type';
import { div } from '@/framework/dom-creators';
import { cartPanel } from '@/shop/cart-panel.component';
import { hero } from '@/shop/hero.component';
import { CURRENCY } from '@/utils/currency.utils';

const items: Cards = [
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

export function root() {
  const $hero = hero({ title: 'Shopping App', subTitle: 'buy and sell' });
  const $container = div('container');
  $container.append($hero, cartPanel({ items }));
  return $container;
}
