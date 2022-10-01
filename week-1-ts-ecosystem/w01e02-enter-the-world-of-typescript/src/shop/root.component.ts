import { div } from '../framework/dom-creators'
import { cartPanel } from './cart-panel.component.js'
import { hero } from './hero.component'
import {Item} from "../models/item";

const items: Item[] = [
  {
    name: 'Tomatoes',
    amount: 2,
    unit: 'kg',
    price: { value: 20, currency: 'PLN' },
  },
  {
    name: 'Banana',
    amount: 5,
    unit: 'kg',
    price: { value: 36, currency: 'PLN' },
  },
]

export function root(): HTMLDivElement {
  const $hero: HTMLElement = hero({ title: 'Shopping App', subTitle: 'buy and sell' })
  const $container: HTMLDivElement = div('container')
  $container.append($hero, cartPanel({ items }))
  return $container
}
