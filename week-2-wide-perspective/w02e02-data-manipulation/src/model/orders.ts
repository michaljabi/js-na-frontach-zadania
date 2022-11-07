import { BehaviorSubject, map, Observable, switchMap, timer } from "rxjs";
import {
  generateId,
  getBestSale,
  getByYear,
  getTotalIncome,
  getYear,
} from "../orders/helpers";
import { OrderType } from "./orders.types";

const createOrder = (sale: number, orderNumber: number): OrderType => ({
  id: generateId(),
  orderDate: new Date().toISOString(),
  sale,
  orderNumber: `${orderNumber}/${getYear()}`,
});

export class Orders {
  #source = new BehaviorSubject<OrderType[]>([]);

  #bestSale = this.#source.pipe(map(getBestSale));

  #totalIncome = this.#source.pipe(map(getTotalIncome));

  constructor(orders: OrderType[]) {
    this.#source.next(orders);
  }

  getBestSale(): Observable<number> {
    return this.#bestSale;
  }

  getTotalIncome(): Observable<number> {
    return this.#totalIncome;
  }

  getOrdersByYear(year: string): Observable<OrderType[]> {
    return this.#source.pipe(map(getByYear(year)));
  }

  getAllOrders(): Observable<OrderType[]> {
    return timer(1000).pipe(switchMap(() => this.#source));
  }

  getTotalOrdersCount() {
    return this.getAllOrders().pipe(map(({ length }) => length));
  }

  addOrder(sale: number): void {
    const newOrder = createOrder(sale, this.#source.value.length);
    timer(1000).subscribe(() => {
      this.#source.next([...this.#source.value, newOrder]);
    });
  }
}
