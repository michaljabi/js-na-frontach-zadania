import { div } from '../framework/dom-creators';
import { cartPanel } from './cart/cart-panel/cart-panel.component';
import { hero } from './hero.component';
import { items } from './items.data';

export const root = (): HTMLElement => {
  const $hero = hero({ title: 'Shopping App', subTitle: 'buy and sell' });

  const $container = div('container');
  $container.append($hero, cartPanel({ items }));

  return $container;
};
