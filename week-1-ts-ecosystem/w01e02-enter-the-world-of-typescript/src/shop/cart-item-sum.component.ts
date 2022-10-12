import { div } from '../framework';

type Props = {
  value: number;
  currency?: string;
};

export function cartItemSum({
  value,
  currency = 'PLN',
}: Props): HTMLDivElement {
  const $panelBlock = div('panel-block is-justify-content-end');

  $panelBlock.innerHTML = `Total price: ${value} ${currency}`;

  return $panelBlock;
}
