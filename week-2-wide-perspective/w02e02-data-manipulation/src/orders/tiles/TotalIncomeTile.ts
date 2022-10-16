import { setComponentData } from "../helpers";
import { Observable } from "rxjs";

export const setTotalIncome = (data: Observable<number>) =>
  data.subscribe((value) => setComponentData("total-income", value.toString()));
