import { getOrders } from './api/getOrders';
import { OrderService } from './orders/order.service';
import { TotalIncomeTile } from './orders/tiles/TotalIncomeTile';
import { AnnualOrdersTile } from './orders/tiles/AnnualOrdersTile';
import { TotalOrdersTile } from './orders/tiles/TotalOrdersTile';
import { BestSaleTile } from './orders/tiles/BestSaleTile';

const orders = await getOrders()
const ordersService = new OrderService(orders)

TotalOrdersTile(ordersService)
TotalIncomeTile(ordersService)
AnnualOrdersTile(ordersService)
BestSaleTile(ordersService)