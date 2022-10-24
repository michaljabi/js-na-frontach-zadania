import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './createProduct.dto';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private prodRepo: Repository<ProductEntity>,
  ) {}

  async getAll() {
    return this.prodRepo.find();
  }

  async getById(id: string) {
    return this.prodRepo.findOneBy({ id });
  }

  async create(product: CreateProductDto) {
    return this.prodRepo.save(product);
  }
}
