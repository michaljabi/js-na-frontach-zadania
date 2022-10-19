import { Service } from "typedi";
import { BaseHttpError } from '../../utils/errors';
import { ProductRepository } from "./product.repository";

@Service()
export class ProductService {
  constructor(private productRepo: ProductRepository) {}

  create(name: string, price: number) {
    return this.productRepo.create(name, price);
  }

  async getById(id: string) {
    const product = await this.productRepo.getById(id);

    if (!product) {
      throw new BaseHttpError('Product not found', 404, 'PRODUCT_NOT_FOUND')
    }

    return product;
  }

  getAll() {
    return this.productRepo.getAll();
  }

  remove(id: string) {
    return this.productRepo.remove(id);
  }
}
