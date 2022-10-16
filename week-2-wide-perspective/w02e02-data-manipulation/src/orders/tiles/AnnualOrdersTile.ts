import { Order } from "../orders.fake-data";

export const setAnnualOrders = (orders: Order[]) => {
  const componentId = "annual-orders";
  const mountPoint = document.querySelector(`[data-tile="${componentId}"]`);
  const subTitle = mountPoint?.querySelector("[data-subtitle]");
  const panel = mountPoint?.querySelector("[data-panel]");
  if (!subTitle || !panel) return;
  subTitle.textContent = `Year ${new Date().getFullYear()}`;
  panel.innerHTML = "";

  for (const order of orders) {
    panel.appendChild(
      makeLiElement({
        orderDate: order.orderDate,
        orderNumber: order.orderNumber,
      })
    );
  }

  function makeLiElement({ orderDate, orderNumber }) {
    const li = document.createElement("li");
    li.className = "panel-block";
    li.innerText = `${orderNumber} | ${orderDate}`;
    return li;
  }
};
