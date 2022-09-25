import { div } from '../framework/dom-creators.js'
import { cartPanel } from './cart-panel.component.js'
import { hero } from './hero.component.ts'

const items = [
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

const header = { title: 'Shopping App', subTitle: 'buy and sell' }

export function root() {
  const $hero = hero(header);
  const $container = div('container')
  $container.append($hero, cartPanel({ items }))
  return $container
}
