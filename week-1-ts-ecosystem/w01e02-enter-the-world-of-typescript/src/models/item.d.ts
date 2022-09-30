import {Price} from "./price";

export interface Item {
    name: string;
    amount: number;
    unit: string;
    price: Price;
}
