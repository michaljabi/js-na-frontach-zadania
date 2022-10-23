import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  create(createOrderDto: CreateOrderDto) {
    return 'This action adds a new order';
  }
}
