import { Injectable } from '@nestjs/common';
import { Order } from '../order.interface';

@Injectable()
export class OrdersRepository {
  private orders: Order[] = [
    {
      id: 1,
      date: new Date(),
      restaurant_id: 1,
      user_id: 1,
    },
    {
      id: 2,
      date: new Date(),
      restaurant_id: 2,
      user_id: 1,
    },
    {
      id: 3,
      date: new Date(),
      restaurant_id: 2,
      user_id: 2,
    },
  ];
  private id = this.orders.length;

  create(product: Omit<Order, 'id'>) {
    this.id++;
    const newOrder = { ...product, id: this.id };
    this.orders.push(newOrder);
    return newOrder;
  }

  getById(id: number, userId: number) {
    return this.orders.find(
      (order) => order.id === id && order.user_id === userId,
    );
  }

  getAll(userId: number) {
    return this.orders.filter((order) => order.user_id === userId);
  }
}
