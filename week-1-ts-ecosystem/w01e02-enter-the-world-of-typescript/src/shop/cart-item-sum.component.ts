import { div } from '../framework/dom-creators.js';

export function cartItemSum({
  value,
  currency = 'PLN',
}: {
  value: number;
  currency: string;
}) {
  const $panelBlock = div('panel-block is-justify-content-end');
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`;
  return $panelBlock;
}
