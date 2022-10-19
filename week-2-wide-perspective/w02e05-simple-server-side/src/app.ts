import "reflect-metadata";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { apiRouter } from "./rest/v1";
import cookieParser from "cookie-parser";
import { BaseHttpError } from "./utils/errors";
import { logger } from "./utils/logger";
import * as dotenv from 'dotenv'
dotenv.config({path: '../.env'})
const app = express();
app.use(cookieParser());
app.use(express.json());

app.use("/", apiRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(err);
  if (err && err.error && err.error.isJoi) {
    res.status(400).json({
      type: err.type,
      message: err.error.toString(),
    });
  } else {
    next(err);
  }
});

app.use(
  (err: BaseHttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err);
    res.status(err.code || 500).json({ message: err.message });
  }
);

app.use((req: Request, res: Response) => {
  return res.status(404).json({ message: "Not found" });
});

app.listen(process.env.PORT, () => {
  logger.info(`Example app listening on port ${process.env.PORT}`);
});
