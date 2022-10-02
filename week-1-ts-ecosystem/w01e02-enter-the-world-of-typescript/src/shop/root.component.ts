import { div } from "../framework/dom-creators";
import { cartPanel } from "./cart-panel.component";
import { hero } from "./hero.component";
import { Item, Unit, Currency } from "../models/cart-models";

const items: Item[] = [
  {
    name: "Tomatoes",
    amount: 2,
    unit: Unit.kg,
    price: { value: 20, currency: Currency.pln },
  },
  {
    name: "Banana",
    amount: 5,
    unit: Unit.kg,
    price: { value: 36, currency: Currency.pln },
  },
];

export function root(): HTMLDivElement {
  const $hero: HTMLElement = hero({
    title: "Shopping App",
    subTitle: "buy and sell",
  });
  const $container: HTMLDivElement = div("container");
  $container.append($hero, cartPanel({ items }));
  return $container;
}
