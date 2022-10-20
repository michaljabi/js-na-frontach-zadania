import { div } from '../framework/dom-creators.js';
import { Price } from '../shared/types/price.interface.js';

interface Args {
  name: string;
  amount: string;
  unit: string;
  price: Price;
}

export function cartItem({ name, amount, unit, price }: Args) {
  const $panelBlock = div('panel-block');
  const $name = div();
  $name.textContent = name;
  const $amount = div('ml-auto');
  $amount.textContent = amount;
  const $unit = div('tag');
  $unit.textContent = unit;
  const $price = div('ml-4');
  $price.textContent = `${price.value} ${price.currency}`;
  $panelBlock.append($name, $amount, $unit, $price);
  return $panelBlock;
}
