import { div } from '../framework/dom-creators';
import { Price } from '../models/item';

export function cartItemSum({ value, currency = 'PLN' }: Price) {
  const $panelBlock = div('panel-block is-justify-content-end');
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`;

  return $panelBlock;
}
