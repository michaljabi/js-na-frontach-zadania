import { Injectable } from '@nestjs/common';
import { OrderProduct } from '../order-product.interface';

@Injectable()
export class OrderProductsRepository {
  private orderProducts: OrderProduct[] = [
    {
      id: 1,
      order_id: 1,
      product_id: 1,
      price: 2333,
    },
    {
      id: 2,
      order_id: 1,
      product_id: 2,
      price: 123,
    },
    {
      id: 3,
      order_id: 2,
      product_id: 1,
      price: 2333,
    },
    {
      id: 4,
      order_id: 2,
      product_id: 2,
      price: 123,
    },
  ];
  private id = this.orderProducts.length;

  create(orderProduct: Omit<OrderProduct, 'id'>) {
    this.id++;
    const newOrderPoduct = { ...orderProduct, id: this.id };
    this.orderProducts.push(newOrderPoduct);
    return newOrderPoduct;
  }

  getByOrderId(orderId: number) {
    return this.orderProducts.filter(
      (orderProduct) => orderProduct.order_id === orderId,
    );
  }
}
