import { div } from '../framework/dom-creators';
import { Price, Currency } from '../models/cart-models';

export function cartItemSum({ value, currency = Currency.pln }: Price): HTMLDivElement {
  const $panelBlock: HTMLDivElement = div('panel-block is-justify-content-end');
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`;
  return $panelBlock;
}
