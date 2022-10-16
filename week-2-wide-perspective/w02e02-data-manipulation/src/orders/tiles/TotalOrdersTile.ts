import { setComponentData } from "../helpers";
import { Observable } from "rxjs";
import { OrderType } from "../../model/orders";

export const setTotalOrders = (data: Observable<OrderType[]>) =>
  data.subscribe((value) =>
    setComponentData("total-orders", value.length.toString())
  );
