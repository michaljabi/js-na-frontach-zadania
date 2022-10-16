import { ordersFakeData } from "./orders/orders.fake-data";
import { setAnnualOrders } from "./orders/tiles/AnnualOrdersTile";
import { setBestSale } from "./orders/tiles/BestSaleTile";
import { setTotalIncome } from "./orders/tiles/TotalIncomeTile";
import { initAddOrderButton } from "./orders/tiles/AddOrderButton";
import { Orders } from "./model/orders";
import { setTotalOrders } from "./orders/tiles/TotalOrdersTile";

const ordersStore = new Orders(ordersFakeData);

const init = async () => {
  const ordersList = await ordersStore.getAllOrders();
  setAnnualOrders(ordersStore.getCurrentYear());
  setBestSale(ordersStore.getBestSale());
  setTotalIncome(ordersStore.getTotalIncome());
  setTotalOrders(ordersList);
  initAddOrderButton(ordersStore);
};

init();
