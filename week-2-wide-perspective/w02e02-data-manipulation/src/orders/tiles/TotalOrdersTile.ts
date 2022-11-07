import { setComponentData } from "../helpers";
import { Orders } from "../../model/orders";

const setData = setComponentData("total-orders");

export const setTotalOrdersCount = (orders: Orders) =>
  orders.getTotalOrdersCount().subscribe(setData);
