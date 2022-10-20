import { Injectable } from '@nestjs/common';
import { Order } from '../order.interface';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private orderRepo: OrdersRepository) {}

  create(order: Omit<Order, 'id'>) {
    return this.orderRepo.create(order);
  }

  getById(id: number, userId: number) {
    return this.orderRepo.getById(id, userId);
  }

  getAll(userId: number) {
    return this.orderRepo.getAll(userId);
  }
}
