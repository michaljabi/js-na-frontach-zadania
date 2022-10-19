import { Service } from "typedi";
import { dbClient } from "../../database/client";

@Service()
export class InvoiceRepository {
  async getById(id: string, userId: string) {
    const orders = await dbClient.invoice.findMany({
      where: { id, userId },
      include: {
        order: true,
        user: true,
      },
    });
    return orders.map((invoice) => ({
      ...invoice,
      user: { ...invoice.user, password: "" },
    }))[0];
  }

  async getAll(userId: string) {
    const invoices = await dbClient.invoice.findMany({
      where: { userId },
      include: {
        order: true,
        user: true,
      },
    });

    return invoices.map((invoice) => ({
      ...invoice,
      user: { ...invoice.user, password: "" },
    }));
  }

  create(userId: string, orderId: string, total: number) {
    return dbClient.invoice.create({
      data: {
        userId,
        orderId,
        total,
      },
    });
  }
}
