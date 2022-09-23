import { Price } from './Price.type';

export interface Card {
  name: string;
  amount: number;
  unit: string;
  price: Price;
}

export type Cards = Card[];
