import { Price } from "./price.interface";

export interface Item {
    name: string;
    amount: number;
    unit: 'kg' | 'lbs';
    price:Price
  }
