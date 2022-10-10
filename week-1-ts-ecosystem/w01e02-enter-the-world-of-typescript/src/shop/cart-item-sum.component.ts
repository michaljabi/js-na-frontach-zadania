import { div } from '../framework/dom-creators.js'
import { Price } from '../model/Price'

export function cartItemSum({ value, currency = 'PLN' }: Price): HTMLDivElement {
  const $panelBlock = div('panel-block is-justify-content-end')
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`
  return $panelBlock
}
