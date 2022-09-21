import { Price } from "types";
import { div } from "framework/dom-creators";

export function cartItemSum({ value, currency = "PLN" }: Price) {
  const $panelBlock = div("panel-block is-justify-content-end");
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`;

  return $panelBlock;
}
