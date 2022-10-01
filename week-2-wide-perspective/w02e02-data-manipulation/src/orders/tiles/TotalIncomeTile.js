import { getOrders } from "../../orders.utils";

const componentId = "total-income";
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`);
const content = mountPoint.querySelector("[data-content]");

let orders;
window.addEventListener("load", async () => {
  orders = await getOrders();

  const totalIncome = orders.reduce((sum, order) => {
    return sum + order.sale;
  }, 0);
  // Ta wartość powinna być wykalkulowana na podstawie kolekcji ordersFakeData
  content.innerHTML = totalIncome.toFixed(2);
});
