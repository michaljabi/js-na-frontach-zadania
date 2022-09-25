import { div } from '../framework/dom-creators.js'
import { cartPanel } from './cart-panel.component.js'
import {Hero, hero} from './hero.component.js'
import {Item} from "./cart-item.component.js";

const items: Item[]  = [
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

const header: Hero = { title: 'Shopping App', subTitle: 'buy and sell' }

export function root(): HTMLElement {
  const $hero = hero(header);
  const $container = div('container')
  $container.append($hero, cartPanel({ items }))
  return $container
}
