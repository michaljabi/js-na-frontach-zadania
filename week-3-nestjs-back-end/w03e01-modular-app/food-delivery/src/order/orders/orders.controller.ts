import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { OrderProductService } from '../orderProducts/orderProducts.service';
import { OrdersService } from './orders.service';

@Controller()
export class OrdersController {
  constructor(
    private ordersService: OrdersService,
    private orderProductService: OrderProductService,
  ) {}
  @UseGuards(JwtAuthGuard)
  @Get('orders')
  getProfile(@Request() req) {
    const orders = this.ordersService.getAll(req.user.id);
    return orders.map((order) => ({
      ...order,
      items: this.orderProductService.getByOrderId(order.id),
    }));
  }
}
