import { article, p } from '../framework';
import { cartItemSum } from './cart-item-sum.component';
import { cartItem } from './cart-item.component';
import { ItemType } from '../types';

type PropsType = {
  heading?: string;
  items: ItemType[];
};

export function cartPanel({
  heading = 'Cart Items',
  items,
}: PropsType): HTMLElement {
  const $article = article('panel is-primary my-6 w-75 mx-auto');
  const $heading = p('panel-heading');

  $heading.textContent = heading;
  $article.append($heading);

  let value = 0;
  items.forEach((item) => {
    value += item.price.value;
    $article.appendChild(cartItem(item));
  });
  $article.append(cartItemSum({ value, currency: 'PLN' }));

  return $article;
}
