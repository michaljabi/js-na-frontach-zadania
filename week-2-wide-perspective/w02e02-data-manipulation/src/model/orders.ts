import { BehaviorSubject, map, Observable } from "rxjs";
import {
  generateId,
  getBestSale,
  getByYear,
  getTotalIncome,
  wait,
} from "../orders/helpers";

export type OrderType = {
  id: string;
  orderNumber: string;
  orderDate: string;
  sale: number;
};

const createOrder = (sale: number, orderNumber: string): OrderType => ({
  id: generateId(),
  orderDate: new Date().toISOString(),
  sale,
  orderNumber,
});

export class Orders {
  #source = new BehaviorSubject<OrderType[]>([]);

  constructor(orders: OrderType[]) {
    this.#source.next(orders);
  }

  getBestSale(): Observable<number> {
    return this.#source.pipe(map(getBestSale));
  }

  getTotalIncome(): Observable<number> {
    return this.#source.pipe(map(getTotalIncome));
  }

  getCurrentYear(): Observable<OrderType[]> {
    return this.#source.pipe(map(getByYear()));
  }

  async getAllOrders(): Promise<Observable<OrderType[]>> {
    await wait(1000);
    return this.#source.asObservable();
  }

  async addOrder(sale: number): Promise<void> {
    await wait(1000);
    const newOrder = createOrder(
      sale,
      `${this.#source.value.length}/${new Date().getFullYear()}`
    );
    this.#source.next([...this.#source.value, newOrder]);
  }
}
