import express from "express";
import { authRouter } from "./auth";
import { invoiceRouter } from "./invoice";
import { orderRouter } from "./order";
import { productRouter } from './product';

const apiRouter = express.Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/orders", orderRouter);
apiRouter.use("/invoices", invoiceRouter);
apiRouter.use("/products", productRouter);

export { apiRouter };
