import { div } from '../framework/dom-creators'
import { cartPanel } from './cart-panel.component'
import { hero } from './hero.component'
import { Item } from '../model/Item'

const items: Item[] = [
  {
    name: 'Tomatoes',
    amount: 2.5,
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
  const $hero = hero({ title: 'Shopping App', subTitle: 'buy and sell' })
  const $container = div('container')
  $container.append($hero, cartPanel({ items }))
  return $container
}
