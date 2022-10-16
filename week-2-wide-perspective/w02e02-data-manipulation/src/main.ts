import { getOrders } from "./orders/orders.fake-data";
import { setAnnualOrders } from "./orders/tiles/AnnualOrdersTile";
import { setBestSale } from "./orders/tiles/BestSaleTile";
import { setTotalIncome } from "./orders/tiles/TotalIncomeTile";
import { setTotalOrders } from "./orders/tiles/TotalOrdersTile";
import {
  getBestSaleOrder,
  getCurrentYear,
  getTotalIncome,
} from "./orders/helpers";

const init = async () => {
  const orders = await getOrders();
  setAnnualOrders(getCurrentYear(orders));
  setBestSale(getBestSaleOrder(orders));
  setTotalIncome(getTotalIncome(orders));
  setTotalOrders(orders.length.toString());
};

init();
