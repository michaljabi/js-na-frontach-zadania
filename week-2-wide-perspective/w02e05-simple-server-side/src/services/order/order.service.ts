import { Service } from "typedi";
import { OrderRepository } from "./order.respository";

@Service()
export class OrserService {
  constructor(private orderRepository: OrderRepository) {}

  create(userId: string, products: { id: string; quantity: number }[]) {
    return this.orderRepository.create(userId, products);
  }

  getAll(userId: string) {
    return this.orderRepository.getAll(userId);
  }
}
