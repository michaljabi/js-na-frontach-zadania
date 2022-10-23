import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { products } from './resource';

@Injectable()
export class ProductsService {
  private products = products;
  create(createProductDto: CreateProductDto) {
    const product = new Product();
    product.id = Math.round(Math.random() * 100);
    product.name = createProductDto.name;
    product.price = createProductDto.price;
    product.restaurantId = createProductDto.restaurantId;

    this.products.push(product);
    return product;
  }

  findAll() {
    return this.products;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const restaurant = this.products.find((r) => r.id === id);

    for (const key in updateProductDto) {
      const element = updateProductDto[key];
      restaurant[key] = element;
    }
  }

  findOne(id: number) {
    return this.products.find((product) => product.id === id);
  }

  remove(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
  }
}
