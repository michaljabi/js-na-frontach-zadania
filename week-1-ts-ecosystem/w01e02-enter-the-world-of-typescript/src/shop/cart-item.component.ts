import { div } from "../framework/dom-creators";

export type CartItem = {
  name: string;
  amount: number;
  unit: string;
  price: {
    value: number;
    currency: string;
  };
};

export function cartItem({ name, amount, unit, price }: CartItem) {
  const $panelBlock = div("panel-block");
  const $name = div();
  $name.textContent = name;
  const $amount = div("ml-auto");
  $amount.textContent = amount.toString();
  const $unit = div("tag");
  $unit.textContent = unit;
  const $price = div("ml-4");
  $price.textContent = `${price.value} ${price.currency}`;
  $panelBlock.append($name, $amount, $unit, $price);
  return $panelBlock;
}
