import { div } from '../framework/dom-creators';
import { CartItemSum } from '../types';

export function cartItemSum({ value, currency = 'PLN' }: CartItemSum): HTMLElement {
  const $panelBlock = div('panel-block is-justify-content-end');

  $panelBlock.innerHTML = `Total price: ${value} ${currency}`;

  return $panelBlock;
}
