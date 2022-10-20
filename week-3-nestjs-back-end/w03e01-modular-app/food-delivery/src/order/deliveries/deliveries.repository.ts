import { Injectable } from '@nestjs/common';
import { Delivery } from '../delivery.interface';

@Injectable()
export class DeliveriyRepository {
  private deliveries: Delivery[] = [
    {
      id: 1,
      order_id: 1,
      delivery_date: new Date(),
    },
    {
      id: 2,
      order_id: 2,
      delivery_date: new Date(),
    },
  ];
  private id = this.deliveries.length;

  create(delivery: Omit<Delivery, 'id'>) {
    this.id++;
    const newDelivery = { ...delivery, id: this.id };
    this.deliveries.push(newDelivery);
    return newDelivery;
  }

  getByOrderId(orderId: number) {
    return this.deliveries.find(
      (orderProduct) => orderProduct.order_id === orderId,
    );
  }
}
