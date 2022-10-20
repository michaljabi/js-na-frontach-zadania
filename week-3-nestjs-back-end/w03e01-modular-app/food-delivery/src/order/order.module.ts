import { Module } from '@nestjs/common';
import { OrdersRepository } from './orders/orders.repository';
import { OrdersService } from './orders/orders.service';
import { OrdersController } from './orders/orders.controller';

@Module({
  providers: [OrdersService, OrdersRepository],
  controllers: [OrdersController],
})
export class OrderModule {}
