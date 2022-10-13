import { BehaviorSubject } from 'rxjs';

export class OrderService {
  #orders = new BehaviorSubject([])
  constructor(orders) {
    this.#orders.next(orders)
  }

  getOrders() {
    return this.#orders.asObservable();
  }
}