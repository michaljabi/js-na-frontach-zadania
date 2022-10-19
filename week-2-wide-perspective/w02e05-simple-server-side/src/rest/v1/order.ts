import express from "express";
import Container from "typedi";
import { isAuth } from "../../middlewares/auth.middleware";
import { InvoiceService } from "../../services/invoice/invoice.service";
import { OrserService } from "../../services/order/order.service";
import { createOrderPayloadValidator } from "../../validators/order";

const orderRouter = express.Router();

orderRouter.get("/", isAuth, async (req, res) => {
  const orderService = Container.get(OrserService);
  const orders = await orderService.getAll(req.user.id);
  res.status(200).json({ orders });
});

orderRouter.get("/:orderId", isAuth, async (req, res) => {
  const orderService = Container.get(OrserService);
  const orders = await orderService.getById(req.params.orderId, req.user.id);
  res.status(200).json({ orders });
});

orderRouter.post("/", isAuth, createOrderPayloadValidator, async (req, res) => {
  const { products } = req.body;
  const orderService = Container.get(OrserService);
  const invoiceService = Container.get(InvoiceService);
  const order = await orderService.create(req.user.id, products);
  const total = await orderService.getTotal(order.id, req.user.id);
  await invoiceService.create(req.user.id, order.id, total);
  res.status(200).json({ ...order, total });
});

export { orderRouter };
