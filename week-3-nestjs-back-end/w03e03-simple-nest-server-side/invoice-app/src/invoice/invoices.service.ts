import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from 'src/order/order.entity';
import { Repository } from 'typeorm';
import { InvoiceEntity } from './invoice.entity';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectRepository(InvoiceEntity)
    private invoiceRepo: Repository<InvoiceEntity>,
  ) {}

  async findAll(userId: string): Promise<InvoiceEntity[]> {
    return await this.invoiceRepo.find({
      where: { order: { user: { id: userId } } },
      relations: { order: true },
    });
  }

  async create(order: OrderEntity) {
    return this.invoiceRepo.save({ order });
  }
}
