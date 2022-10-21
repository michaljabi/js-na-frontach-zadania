import express from "express";
import { createOrder, getOrders } from "./order.controller";

const router = express.Router();

router.post("/", createOrder);
router.get("/", getOrders);

export { router };
