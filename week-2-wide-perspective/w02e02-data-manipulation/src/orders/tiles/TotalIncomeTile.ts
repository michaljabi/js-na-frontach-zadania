import { setComponentData } from "../helpers";
import { Orders } from "../../model/orders";

const setData = setComponentData("total-income");

export const setTotalIncome = (orders: Orders) =>
  orders.getTotalIncome().subscribe(setData);
