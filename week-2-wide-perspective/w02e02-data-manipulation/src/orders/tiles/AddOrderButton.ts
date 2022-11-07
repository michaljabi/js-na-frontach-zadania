import { Orders } from "../../model/orders";
import { fromEvent } from "rxjs";

const button = document.querySelector('[data-button="add-order"]');

export function initAddOrderButton(orders: Orders) {
  if (button) {
    fromEvent(button, "click").subscribe(() => {
      orders.addOrder(555.5);
    });
  }
}
