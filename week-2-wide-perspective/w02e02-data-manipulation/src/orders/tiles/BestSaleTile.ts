import { setComponentData } from "../helpers";
import { Observable } from "rxjs";

export const setBestSale = (data: Observable<number>) =>
  data.subscribe((value) => setComponentData("best-sale", value.toString()));
