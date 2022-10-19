import { Service } from "typedi";
import { dbClient } from "../../database/client";

@Service()
export class InvoiceRepository {
  getById(id: string, userId: string) {
    return dbClient.invoice.findMany({
      where: { id, userId },
      include: {
        order: true
      },
    });
  }
}
