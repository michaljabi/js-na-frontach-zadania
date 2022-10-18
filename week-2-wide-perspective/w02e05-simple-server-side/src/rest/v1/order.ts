import express from "express";
import Container from "typedi";
import { isAuth } from "../../middlewares/auth.middleware";
import { OrserService } from "../../services/order/order.service";

const orderRouter = express.Router();

orderRouter.get("/", isAuth, async (req, res) => {
  const orderService = Container.get(OrserService);
  const orders = await orderService.getAll(req.user.id);
  res.status(200).json({ orders });
});

orderRouter.post("/", isAuth, async (req, res) => {
  const { products } = req.body;
  const orderService = Container.get(OrserService);
  const orders = await orderService.create(req.user.id, products);
  res.status(200).json({ orders });
});

export { orderRouter };
