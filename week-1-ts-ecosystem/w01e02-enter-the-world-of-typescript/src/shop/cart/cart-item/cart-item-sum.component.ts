import { div } from '../../../framework/dom-creators';
import { priceType } from '../cart.types';

export const cartItemSum = ({ value, currency = 'PLN' }: priceType): HTMLElement => {
  const $panelBlock = div('panel-block is-justify-content-end');
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`;
  return $panelBlock;
};
