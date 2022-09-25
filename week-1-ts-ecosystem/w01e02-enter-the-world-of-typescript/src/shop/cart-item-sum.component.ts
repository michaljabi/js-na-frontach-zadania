import { div } from '../framework/dom-creators'
import { price } from '../interfaces/price.interface'

export function cartItemSum({ value, currency = 'PLN' }: price) {
  const $panelBlock: HTMLDivElement = div('panel-block is-justify-content-end')
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`
  return $panelBlock
}
