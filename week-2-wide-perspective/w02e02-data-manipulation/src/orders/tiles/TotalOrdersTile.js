import { getOrders } from "../../orders.utils";

const componentId = "total-orders";
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`);
const content = mountPoint.querySelector("[data-content]");

let orders;
window.addEventListener("load", async () => {
  orders = await getOrders();

  // Ta wartość powinna być wykalkulowana na podstawie kolekcji ordersFakeData
  content.innerHTML = orders.length;
});
