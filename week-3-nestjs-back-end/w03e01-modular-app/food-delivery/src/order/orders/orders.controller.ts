import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { OrdersService } from './orders.service';

@Controller()
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('orders')
  getOrders(@Request() req) {
    return this.ordersService.getAll(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('orders')
  createOrder(@Request() req) {
    const { products = [], restaurantId } = req.body;
    if (!products.length || !restaurantId) {
      throw new HttpException('Wrong payload', HttpStatus.BAD_REQUEST);
    }
    return this.ordersService.create(req.user.id, products, restaurantId);
  }
}
