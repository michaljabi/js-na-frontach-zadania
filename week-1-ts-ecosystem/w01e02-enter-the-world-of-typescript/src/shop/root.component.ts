import { div } from '../framework/dom-creators.js';
import { cartPanel } from './cart-panel.component.js';
import { hero } from './hero.component.js';
import { items } from '../data/items.js';

export function root() {
  const $hero = hero({ title: 'Shopping App', subTitle: 'buy and sell' });
  const $container = div('container');
  $container.append($hero, cartPanel({ items }));
  return $container;
}
