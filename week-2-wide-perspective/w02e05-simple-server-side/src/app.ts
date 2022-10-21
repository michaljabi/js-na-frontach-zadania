import express from "express";
import expressWinston from "express-winston";

import { logger } from "./logger/logger";

import { router as userRouter } from "./modules/user/user.router";
import { router as productsRouter } from "./modules/products/products.router";
import { router as ordersRouter } from "./modules/order/order.router";
import { router as invoicesRouter } from "./modules/invoice/invoice.router";

import validate from "./middlewares/validateResource";
import { auth } from "./middlewares/auth";

import { authSchema } from "./modules/user/user.schema";
import { orderSchema } from "./modules/order/order.schema";

const app = express();

const PORT = process.env.PORT || 5000;
app.use(
  expressWinston.logger({
    winstonInstance: logger,
    statusLevels: true,
  })
);
app.use(express.json());

app.use("/auth", validate(authSchema), userRouter);
app.use("/products", auth, productsRouter);
app.use("/orders", validate(orderSchema), auth, ordersRouter);
app.use("/invoices", auth, invoicesRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
