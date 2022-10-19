import express from "express";
import Container from "typedi";
import { isAuth } from "../../middlewares/auth.middleware";
import { InvoiceService } from "../../services/invoice/invoice.service";

const invoiceRouter = express.Router();

invoiceRouter.get("/", isAuth, async (req, res) => {
    const invoiceService = Container.get(InvoiceService);
    const invoice = await invoiceService.getAll(req.user.id);
  res.status(200).json({ orders: invoice });
});

invoiceRouter.get("/:invoiceId", isAuth, async (req, res) => {
  const invoiceService = Container.get(InvoiceService);
  const invoice = await invoiceService.getById(req.params.invoiceId, req.user.id);
  res.status(200).json({ orders: invoice });
});

export { invoiceRouter };
