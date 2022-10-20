import { Injectable } from '@nestjs/common';
import { Product } from '../product.interface';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private prodRepo: ProductsRepository) {}

  create(product: Omit<Product, 'id'>) {
    return this.prodRepo.create(product);
  }

  getById(id: number) {
    return this.prodRepo.getById(id);
  }

  getAll() {
    return this.prodRepo.getAll();
  }
}
