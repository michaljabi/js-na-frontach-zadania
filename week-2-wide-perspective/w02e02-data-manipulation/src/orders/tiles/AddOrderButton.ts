import { Orders } from "../../model/orders";

const button = document.querySelector('[data-button="add-order"]');

export function initAddOrderButton(orders: Orders) {
  if (button) {
    button.addEventListener("click",  () => {
      orders.addOrder(22222);
    });
  }
}
