import { Service } from "typedi";
import { BaseHttpError } from "../../utils/errors";
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

  async getById(id: string, userId: string) {
    const order = await this.orderRepository.getById(id, userId);

    if (!order) {
      throw new BaseHttpError("Order not found", 404, "ORDER_NOT_FOUND");
    }
  }

  async getTotal(id: string, userId: string): Promise<number> {
    const order = await this.orderRepository.getById(id, userId);
    return order.items.reduce(
      (sum, nextItem) => sum + nextItem.quantity * nextItem.price.toNumber(),
      0
    );
  }
}
