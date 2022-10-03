import { div } from '../framework/dom-creators'
import { Price } from '../interfaces/price.interface'

export function cartItemSum({ value, currency = 'PLN' }: Price) {
  const $panelBlock: HTMLDivElement = div('panel-block is-justify-content-end')
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`
  return $panelBlock
}
