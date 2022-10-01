import { getOrders } from "../../orders.utils";

const componentId = "annual-orders";
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`);
const subTitle = mountPoint.querySelector("[data-subtitle]");
const panel = mountPoint.querySelector("[data-panel]");

let orders;
window.addEventListener("load", async () => {
  orders = await getOrders();

  // Uważaj na odfiltrowanie wg. roku (2022)
  subTitle.textContent = "Year 2022";
  panel.innerHTML = "";

  // Tutaj podobnie, powinniśmy interpretować dane z: ordersFakeData
  const filteredOrders = getOrdersByYear(orders, 2022);

  for (const { orderDate, orderNumber } of filteredOrders) {
    panel.appendChild(makeLiElement({ orderDate, orderNumber }));
  }
});

function getOrdersByYear(orders, year) {
  return orders.filter((order) => {
    const date = new Date(order.orderDate);
    const orderYear = date.getFullYear();

    return orderYear === year;
  });
}

function makeLiElement({ orderDate, orderNumber }) {
  const li = document.createElement("li");
  li.className = "panel-block";
  // Dodaj jakieś ładne formatowanie daty!
  li.innerText = `${orderNumber} | ${new Intl.DateTimeFormat("pl-PL").format(
    new Date(orderDate)
  )}`;
  return li;
}
