import 'reflect-metadata';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from "express";
import { apiRouter } from "./rest/v1";
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { BaseHttpError } from './utils/errors';

dotenv.config()

const app = express();
app.use(cookieParser())
app.use(express.json());

app.use("/", apiRouter);

app.use((err: BaseHttpError, req: Request, res: Response, next: NextFunction) => {
  console.error(err)
  res.status(err.code || 500).json({message: err.message})
})

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
