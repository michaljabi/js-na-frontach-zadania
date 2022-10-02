import { article, p } from '../framework/dom-creators';
import { Currency, Item } from '../models/cart-models';
import { cartItemSum } from './cart-item-sum.component';
import { cartItem } from './cart-item.component';

export function cartPanel({ items, heading = 'Cart Items' }: { items: Item[]; heading?: string }): HTMLElement {
  const $article: HTMLElement = article('panel is-primary my-6 w-75 mx-auto');
  const $heading: HTMLParagraphElement = p('panel-heading');
  $heading.textContent = heading;
  $article.append($heading);
  let value = 0;
  items.forEach((item: Item) => {
    value += item.price.value;
    $article.appendChild(cartItem(item));
  });
  $article.append(cartItemSum({ value, currency: Currency.pln }));
  return $article;
}
