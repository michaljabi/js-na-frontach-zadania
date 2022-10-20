import { Module } from '@nestjs/common';
import { OrdersRepository } from './orders/orders.repository';
import { OrdersService } from './orders/orders.service';
import { OrdersController } from './orders/orders.controller';
import { OrderProductService } from './orderProducts/orderProducts.service';
import { OrderProductsRepository } from './orderProducts/orderProducts.repository';
import { RestaurantModule } from 'src/restaurant/restaurant.module';

@Module({
  imports: [RestaurantModule],
  providers: [
    OrdersService,
    OrdersRepository,
    OrderProductService,
    OrderProductsRepository,
  ],
  controllers: [OrdersController],
})
export class OrderModule {}
