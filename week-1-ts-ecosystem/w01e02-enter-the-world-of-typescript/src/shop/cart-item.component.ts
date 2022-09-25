import { div } from '../framework/dom-creators.js'

export type Unit = 'kg' | 'g' | 'mg';
export type Currency = 'PLN' | 'USD';

export interface Price {
  value: number,
  currency?: Currency
}

export interface Item {
  name: string,
  amount: number,
  unit: Unit,
  price: Price
}
export function cartItem({ name, amount, unit, price }: Item) {
  const $panelBlock = div('panel-block')
  const $name = div()
  $name.textContent = name
  const $amount = div('ml-auto')
  $amount.textContent = amount.toString();
  const $unit = div('tag')
  $unit.textContent = unit
  const $price = div('ml-4')
  $price.textContent = `${price.value} ${price.currency}`
  $panelBlock.append($name, $amount, $unit, $price)
  return $panelBlock
}
