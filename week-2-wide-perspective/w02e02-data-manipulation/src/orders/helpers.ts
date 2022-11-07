import { compose } from "ramda";
import { OrderType } from "../model/orders.types";

export const getYear = (date: string | number | Date = new Date()) =>
  new Date(date).getFullYear().toString(10);

export const generateId = (): string =>
  (String(1e7) + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: string) =>
    (
      Number(c) ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))
    ).toString(16)
  );

export const getByYear = (year: string) => (list: OrderType[]) =>
  list.filter((order) => getYear(order.orderDate) === getYear(year));

export const normalizeFloat = (item) => Number(item.toFixed(2));

export const getProperty =
  <T, P extends keyof T>(property: P) =>
  (obj: T): T[P] =>
    obj[property];

export const getHighestValue = (list: number[]) =>
  list.reduce((a, b) => (a < b ? b : a), 0);

export const sum = (list: number[]) => list.reduce((a, b) => a + b, 0);

export const getSales = (list: OrderType[]) =>
  list.map(getProperty<OrderType, "sale">("sale"));

export const getBestSale = (list: OrderType[]) =>
  compose(getHighestValue, getSales)(list);

export const getTotalIncome = (list: OrderType[]) =>
  compose(normalizeFloat, sum, getSales)(list);

export const setComponentData =
  (id: string): ((data: string | number) => void) =>
  (data) => {
    const mountPoint = document.querySelector(`[data-tile="${id}"]`);
    const content = mountPoint?.querySelector("[data-content]");
    if (!content) return;
    content.innerHTML = data.toString();
  };
