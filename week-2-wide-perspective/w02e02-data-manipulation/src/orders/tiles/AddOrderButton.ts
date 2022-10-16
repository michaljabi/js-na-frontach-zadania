import { Orders } from "../../model/orders";

export const initAddOrderButton = (store: Orders) => {
  const button = document.querySelector('[data-button="add-order"]');
  if (button) {
    button.addEventListener("click", () => {
      store.addOrder(500);
    });
  }
};
