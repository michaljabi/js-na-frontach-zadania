import { Injectable } from '@nestjs/common';
import { Product } from '../product.interface';

@Injectable()
export class ProductsRepository {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Product description',
      price: 123,
      restaurant_id: 1,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Product description',
      price: 56,
      restaurant_id: 2,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Product description',
      price: 21,
      restaurant_id: 1,
    },
  ];
  private id = this.products.length;

  create(product: Omit<Product, 'id'>) {
    this.id++;
    const newProd = { ...product, id: this.id };
    this.products.push(newProd);
    return newProd;
  }

  getById(id: number) {
    return this.products.find((user) => user.id === id);
  }

  getAll() {
    return this.products;
  }
}
