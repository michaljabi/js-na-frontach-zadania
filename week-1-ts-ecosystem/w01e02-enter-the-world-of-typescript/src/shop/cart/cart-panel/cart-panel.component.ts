import { article, p } from '../../../framework/dom-creators';
import { cartItem } from '../cart-item/cart-item.component';
import { cartItemSum } from '../cart-item/cart-item-sum.component';
import { cartPanelType } from '../cart.types';

export const cartPanel = ({ heading = 'Cart Items', items }: cartPanelType): HTMLElement => {
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
};
