import { Order } from "./orders.fake-data";

export const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

const getProperty =
  <T>(property: keyof T) =>
  (obj: T) =>
    obj[property];
const getHighestValue = (list: number[]) =>
  list.reduce((a, b) => (a < b ? b : a), 0);
const sum = (list: number[]) => list.reduce((a, b) => a + b, 0).toFixed(2);
const getByYear =
  (year = new Date().getFullYear()) =>
  (list: Order[]) =>
    list.filter((order) => new Date(order.orderDate).getFullYear() === year);

const getSales = (list: Order[]) => list.map(getProperty<Order>("sale"));

export const getTotalIncome = compose(sum, getSales);
export const getBestSaleOrder = compose(getHighestValue, getSales);
export const getCurrentYear = compose(getByYear());

export const setComponentData = (id: string, data: string): void => {
  const mountPoint = document.querySelector(`[data-tile="${id}"]`);
  const content = mountPoint?.querySelector("[data-content]");
  if (!content) return;
  content.innerHTML = data;
};
