import { div } from "../framework/dom-creators";

type Props = {
  value: number;
  currency: string;
};
export function cartItemSum({ value, currency = "PLN" }: Props) {
  const $panelBlock = div("panel-block is-justify-content-end");
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`;
  return $panelBlock;
}
