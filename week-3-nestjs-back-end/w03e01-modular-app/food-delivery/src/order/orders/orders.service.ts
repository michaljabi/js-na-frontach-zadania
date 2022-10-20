import { Injectable } from '@nestjs/common';
import { DeliveryService } from '../deliveries/deliveries.service';
import { OrderProductService } from '../orderProducts/orderProducts.service';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(
    private orderRepo: OrdersRepository,
    private delverService: DeliveryService,
    private orderProductService: OrderProductService,
  ) {}

  create(
    userId: number,
    products: { productId: number; price: number }[],
    restaurantId: number,
  ) {
    const order = this.orderRepo.create({
      date: new Date(),
      user_id: userId,
      restaurant_id: restaurantId,
    });
    this.delverService.create({
      order_id: order.id,
      delivery_date: new Date(),
    });
    products.forEach((product) =>
      this.orderProductService.create({
        order_id: order.id,
        product_id: product.productId,
        price: product.price,
      }),
    );
  }

  getById(id: number, userId: number) {
    const order = this.orderRepo.getById(id, userId);
    return { ...order, items: this.orderProductService.getByOrderId(order.id) };
  }

  getAll(userId: number) {
    return this.orderRepo.getAll(userId).map((order) => ({
      ...order,
      items: this.orderProductService.getByOrderId(order.id),
      delivery: this.delverService.getByOrderId(order.id),
    }));
  }
}
