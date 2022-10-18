import { Service } from "typedi";
import { ProductRepository } from "./product.repository";

@Service()
export class ProductService {
  constructor(private productRepo: ProductRepository) {}

  create(name: string, price: number) {
    return this.productRepo.create(name, price);
  }

  getById(id: string) {
    return this.productRepo.getById(id);
  }

  getAll() {
    return this.productRepo.getAll();
  }

  remove(id: string) {
    return this.productRepo.remove(id);
  }
}
