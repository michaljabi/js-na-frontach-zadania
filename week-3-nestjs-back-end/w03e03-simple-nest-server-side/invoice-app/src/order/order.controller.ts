import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateOrderDto } from './createOrder.dto';
import { OrderService } from './order.service';

@Controller()
export class OrderController {
  constructor(private orderService: OrderService) {}

  @UseGuards(JwtAuthGuard)
  @Get('orders')
  getOrders(@Request() req) {
    return this.orderService.findAll(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('orders')
  getProfile(@Request() req, @Body() createOrder: CreateOrderDto) {
    return this.orderService.create(req.user.id, createOrder);
  }
}
