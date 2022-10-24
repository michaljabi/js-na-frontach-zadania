import { ProductEntity } from 'src/product/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderEntity } from './order.entity';

@Entity()
export class OrderItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne((type) => ProductEntity, (product) => product.id)
  @JoinColumn()
  product: ProductEntity;

  @ManyToOne((type) => OrderEntity, (order) => order.id)
  @JoinColumn()
  order: OrderEntity;

  @Column()
  quantity: number;

  @Column()
  price: number;
}
