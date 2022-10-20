import { Injectable } from '@nestjs/common';
import { Delivery } from '../delivery.interface';
import { DeliveriyRepository } from './deliveries.repository';

@Injectable()
export class DeliveryService {
  constructor(private deliveryRepo: DeliveriyRepository) {}

  create(delivery: Omit<Delivery, 'id'>) {
    return this.deliveryRepo.create(delivery);
  }

  getByOrderId(orderId: number) {
    return this.deliveryRepo.getByOrderId(orderId);
  }
}
