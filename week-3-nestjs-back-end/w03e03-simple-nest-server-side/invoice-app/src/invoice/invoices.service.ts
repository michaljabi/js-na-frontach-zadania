import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from 'src/order/order.entity';
import { OrderService } from 'src/order/order.service';
import { Repository } from 'typeorm';
import { InvoiceEntity } from './invoice.entity';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectRepository(InvoiceEntity)
    private invoiceRepo: Repository<InvoiceEntity>,
    @Inject(forwardRef(() => OrderService))
    private orderService: OrderService,
  ) {}

  async findAll(userId: string) {
    const invoices = await this.invoiceRepo.find({
      where: { order: { user: { id: userId } } },
      relations: { order: true },
    });

    return await Promise.all(
      invoices.map((invoice) => {
        return this.orderService
          .getItemsByOrderId(invoice.order.id)
          .then((items) => ({
            ...invoice,
            items,
          }));
      }),
    );
  }

  async create(order: OrderEntity) {
    return this.invoiceRepo.save({ order });
  }
}
