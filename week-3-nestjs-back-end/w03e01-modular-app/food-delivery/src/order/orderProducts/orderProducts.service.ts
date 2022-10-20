import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/restaurant/products/products.service';
import { OrderProduct } from '../order-product.interface';
import { OrderProductsRepository } from './orderProducts.repository';

@Injectable()
export class OrderProductService {
  constructor(
    private orderProdRepo: OrderProductsRepository,
    private productService: ProductsService,
  ) {}

  create(orderProd: Omit<OrderProduct, 'id'>) {
    return this.orderProdRepo.create(orderProd);
  }

  getByOrderId(orderId: number) {
    return this.orderProdRepo.getByOrderId(orderId).map((orderProduct) => ({
      ...orderProduct,
      product: this.productService.getById(orderProduct.product_id),
    }));
  }
}
