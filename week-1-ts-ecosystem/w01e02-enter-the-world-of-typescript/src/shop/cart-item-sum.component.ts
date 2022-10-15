import { div } from "../framework/dom-creators";

type CartItemSum = {
  value: number;
  currency?: string;
};

export function cartItemSum({ value, currency = "PLN" }: CartItemSum) {
  const $panelBlock = div("panel-block is-justify-content-end");
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`;
  return $panelBlock;
}
