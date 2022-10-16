import { OrderType } from "../model/orders";

export const wait = (time: number): Promise<void> =>
  new Promise((res) => {
    setTimeout(res, time);
  });

export const generateId = (): string =>
  (String(1e7) + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: string) =>
    (
      Number(c) ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))
    ).toString(16)
  );

export const getProperty =
  <T>(property: keyof T) =>
  (obj: T) =>
    obj[property];

export const getHighestValue = (list: number[]) =>
  list.reduce((a, b) => (a < b ? b : a), 0);

export const sum = (list) => list.reduce((a, b) => a + b, 0).toFixed(2);

export const getByYear =
  (year = new Date().getFullYear()) =>
  (list: OrderType[]) =>
    list.filter((order) => new Date(order.orderDate).getFullYear() === year);

export const getSales = (list) => list.map(getProperty("sale"));

export const setComponentData = (id: string, data: string): void => {
  const mountPoint = document.querySelector(`[data-tile="${id}"]`);
  const content = mountPoint?.querySelector("[data-content]");
  if (!content) return;
  content.innerHTML = data;
};
