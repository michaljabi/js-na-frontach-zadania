import { OrderType } from "../../model/orders";
import { Observable } from "rxjs";

function makeLiElement({ orderDate, orderNumber }) {
  const li = document.createElement("li");
  li.className = "panel-block";
  li.innerText = `${orderNumber} | ${orderDate}`;
  return li;
}

export const setAnnualOrders = (orders: Observable<OrderType[]>) => {
  const componentId = "annual-orders";
  const mountPoint = document.querySelector(`[data-tile="${componentId}"]`);
  const subTitle = mountPoint?.querySelector("[data-subtitle]");
  const panel = mountPoint?.querySelector("[data-panel]");
  if (!subTitle || !panel) return;
  orders.subscribe((list) => {
    subTitle.textContent = `Year ${new Date().getFullYear()}`;
    panel.innerHTML = "";

    for (const order of list) {
      panel.appendChild(
        makeLiElement({
          orderDate: order.orderDate,
          orderNumber: order.orderNumber,
        })
      );
    }
  });
};
