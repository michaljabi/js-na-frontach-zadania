import { price } from "./price.interface";

export interface item {
    name: string;
    amount: number;
    unit: 'kg' | 'lbs';
    price:price
  }
