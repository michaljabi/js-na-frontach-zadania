import { div } from '@/framework/dom-creators';
import { Card } from '@/types/Card.type';

export function cartItem({ name, amount, unit, price }: Card) {
  const $panelBlock = div('panel-block');
  const $name = div();
  $name.textContent = name;
  const $amount = div('ml-auto');
  $amount.textContent = amount.toString();
  const $unit = div('tag');
  $unit.textContent = unit;
  const $price = div('ml-4');
  $price.textContent = `${price.value} ${price.currency}`;
  $panelBlock.append($name, $amount, $unit, $price);
  return $panelBlock;
}
