import { div } from '../framework/dom-creators.js';
import Item from '../model/item';

function cartItemSum({ value, currency = 'PLN' }: Item['price']) {
  const $panelBlock = div('panel-block is-justify-content-end');
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`;
  return $panelBlock;
}

export default cartItemSum;
