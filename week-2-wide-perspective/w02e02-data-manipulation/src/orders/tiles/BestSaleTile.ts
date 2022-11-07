import { setComponentData } from "../helpers";
import { Orders } from "../../model/orders";

const setData = setComponentData("best-sale");

export function setBestSale(orders: Orders) {
  orders.getBestSale().subscribe(setData);
}
