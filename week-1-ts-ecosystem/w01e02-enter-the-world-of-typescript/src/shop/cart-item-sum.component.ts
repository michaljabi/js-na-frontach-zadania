import { div } from "../framework/dom-creators";

export function cartItemSum({
  value,
  currency = "PLN",
}: {
  value: number;
  currency: string;
}): HTMLElement {
  const $panelBlock: HTMLElement = div("panel-block is-justify-content-end");
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`;
  return $panelBlock;
}
