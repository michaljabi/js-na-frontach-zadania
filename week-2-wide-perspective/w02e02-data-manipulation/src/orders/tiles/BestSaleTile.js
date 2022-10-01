import { getOrders } from "../../orders.utils";

const componentId = "best-sale";
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`);
const content = mountPoint.querySelector("[data-content]");

let orders = [];

window.addEventListener("load", async () => {
  orders = await getOrders();

  const bestSale = orders.reduce((sale, order) => {
    if (sale < order.sale) {
      sale = order.sale;
    }

    return sale;
  }, 0);

  // Ta wartość powinna pochodzić z kolekcji ordersFakeData
  content.innerHTML = bestSale;
});
