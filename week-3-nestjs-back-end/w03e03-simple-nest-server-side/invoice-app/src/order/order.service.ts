import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientsService } from 'src/client/clients.service';
import { InvoicesService } from 'src/invoice/invoices.service';
import { ProductsService } from 'src/product/products.service';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './createOrder.dto';
import { OrderItemEntity } from './order-item.entity';
import { OrderEntity } from './order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private orderRepo: Repository<OrderEntity>,
    @InjectRepository(OrderItemEntity)
    private orderItemRepo: Repository<OrderItemEntity>,
    private productService: ProductsService,
    private clientService: ClientsService,
    private invoiceService: InvoicesService,
  ) {}

  async findAll(userId: string): Promise<OrderEntity[]> {
    return await this.orderRepo.find({
      where: { user: { id: userId } },
      relations: { user: true, items: true },
    });
  }

  async create(userId: string, order: CreateOrderDto) {
    const user = await this.clientService.getById(userId);
    const { products: productItems } = order;
    const products = await Promise.all(
      productItems.map((item) => this.productService.getById(item.productId)),
    );

    const newOrder = await this.orderRepo.save({
      user,
    });

    const orderProductItems = await Promise.all(
      productItems.map((item) => {
        const product = products.find((prod) => prod.id === item.productId);
        return this.orderItemRepo.save({
          product,
          price: product.price,
          quantity: item.quantity,
          order: newOrder,
        });
      }),
    );

    // const total = orderProductItems.reduce(
    //   (sum, nextItem) => sum + nextItem.price,
    //   0,
    // );

    this.invoiceService.create(newOrder);

    return newOrder;
  }
}
