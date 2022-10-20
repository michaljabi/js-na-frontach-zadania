import { div } from '../framework/dom-creators';
import { cartPanel } from './cart-panel.component';
import { hero } from './hero.component';
import { cartItems } from '../data/cartItems';

export function root() {
  const $hero = hero({ title: 'Shopping App', subTitle: 'buy and sell' });
  const $container = div('container');
  $container.append($hero, cartPanel({ cartItems }));
  return $container;
}
