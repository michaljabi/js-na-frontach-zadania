import { Service } from "typedi";
import { dbClient } from "../../database/client";

@Service()
export class ProductRepository {
  getById(id: string) {
    return dbClient.product.findUnique({ where: { id } });
  }

  getAll() {
    return dbClient.product.findMany();
  }

  create(name: string, price: number) {
    return dbClient.product.create({ data: { name, price } });
  }

  remove(id: string) {
    return dbClient.product.delete({ where: { id } });
  }
}
