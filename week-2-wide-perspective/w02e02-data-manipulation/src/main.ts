import { ordersFakeData } from "./orders/orders.fake-data";
import { setAnnualOrders } from "./orders/tiles/AnnualOrdersTile";
import { setBestSale } from "./orders/tiles/BestSaleTile";
import { setTotalIncome } from "./orders/tiles/TotalIncomeTile";
import { initAddOrderButton } from "./orders/tiles/AddOrderButton";
import { Orders } from "./model/orders";
import { setTotalOrdersCount } from "./orders/tiles/TotalOrdersTile";

const ordersStore = new Orders(ordersFakeData);

const init = () => {
  setAnnualOrders(ordersStore);
  setBestSale(ordersStore);
  setTotalIncome(ordersStore);
  setTotalOrdersCount(ordersStore);
  initAddOrderButton(ordersStore);
};

init();
