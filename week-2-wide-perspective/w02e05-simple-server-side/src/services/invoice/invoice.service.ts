import { Service } from "typedi";
import { BaseHttpError } from "../../utils/errors";
import { InvoiceRepository } from "./invoice.repository";

@Service()
export class InvoiceService {
  constructor(private invoiceRepo: InvoiceRepository) {}

  async getById(id: string, userId: string) {
    const invoice = await this.invoiceRepo.getById(id, userId);

    if (!invoice) {
      throw new BaseHttpError("Invoice not found", 404, "INVOICE_NOT_FOUND");
    }

    return invoice;
  }

  getAll(userId: string) {
    return this.invoiceRepo.getAll(userId);
  }

  create(userId: string, orderId: string, total: number) {
    return this.invoiceRepo.create(userId, orderId, total);

  }
}
