import { div } from '../framework/dom-creators.ts';
import { cartPanel } from './cart/cart-panel/cart-panel.component.ts';
import { hero } from './hero.component.js';
import { items } from './items.data.ts';

export function root() {
  const $hero = hero({ title: 'Shopping App', subTitle: 'buy and sell' });
  const $container = div('container');
  $container.append($hero, cartPanel({ items }));
  return $container;
}
