import { div } from '../framework/dom-creators';
import { Item } from '../models/cart-models';

export function cartItem({ name, amount, unit, price }: Item): HTMLDivElement {
  const $panelBlock: HTMLDivElement = div('panel-block');
  const $name: HTMLDivElement = div();
  $name.textContent = name;
  const $amount: HTMLDivElement = div('ml-auto');
  $amount.textContent = amount.toString();
  const $unit: HTMLDivElement = div('tag');
  $unit.textContent = unit;
  const $price: HTMLDivElement = div('ml-4');
  $price.textContent = `${price.value} ${price.currency}`;
  $panelBlock.append($name, $amount, $unit, $price);
  return $panelBlock;
}
