import { ClientEntity } from 'src/client/client.entity';
import { InvoiceEntity } from 'src/invoice/invoice.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderItemEntity } from './order-item.entity';

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne((type) => ClientEntity, (client) => client.id)
  @JoinColumn()
  user: ClientEntity;

  @OneToMany((type) => OrderItemEntity, (item) => item.id)
  @JoinColumn()
  items: OrderItemEntity[];

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updtedAt: string;
}
