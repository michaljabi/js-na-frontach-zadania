import { div } from '../framework/dom-creators.js';
import cartPanel from './cart-panel.component';
import hero from './hero.component';
import items from '../storage/items.storage';

export function root() {
  const $hero = hero({ title: 'Shopping App', subTitle: 'buy and sell' });
  const $container = div('container');
  $container.append(
    $hero,
    cartPanel({
      items,
    }),
  );
  return $container;
}
