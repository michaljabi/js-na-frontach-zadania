import express from "express";
import { authRouter } from "./auth";
import { orderRouter } from './order';

const apiRouter = express.Router();

apiRouter.use("/auth", authRouter);
apiRouter.use('/orders', orderRouter)

export { apiRouter };
