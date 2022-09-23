import { div } from '@/framework/dom-creators';
import { Price } from '@/types/Price.type';
import { CURRENCY } from '@/utils/currency.utils';

export function cartItemSum({ value, currency = CURRENCY.PLN }: Price) {
  const $panelBlock = div('panel-block is-justify-content-end');
  $panelBlock.textContent = `Total price: ${value} ${currency}`;
  return $panelBlock;
}
