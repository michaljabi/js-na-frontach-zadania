import { Orders } from "../../model/orders";
import { getYear } from "../helpers";

function makeLiElement(innerText: string) {
  const li = document.createElement("li");
  return Object.assign(li, { className: "panel-block", innerText });
}

const componentId = "annual-orders";
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`);
const subTitle = mountPoint?.querySelector("[data-subtitle]");
const panel = mountPoint?.querySelector("[data-panel]");

export function setAnnualOrders(orders: Orders, year = getYear()) {
  if (!subTitle || !panel) return;
  subTitle.textContent = `Year ${year}`;
  orders.getOrdersByYear(year).subscribe((list) => {
    panel.innerHTML = "";
    list.forEach(({ orderDate, orderNumber }) =>
      panel.appendChild(makeLiElement(`${orderNumber} | ${orderDate}`))
    );
  });
}
