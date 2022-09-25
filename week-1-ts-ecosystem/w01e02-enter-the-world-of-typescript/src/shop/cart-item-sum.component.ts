import { div } from '../framework/dom-creators.js'
import {Price} from "./cart-item.component.js";

export function cartItemSum({ value, currency = 'PLN' }: Price): HTMLElement {
  const $panelBlock = div('panel-block is-justify-content-end')
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`
  return $panelBlock
}
