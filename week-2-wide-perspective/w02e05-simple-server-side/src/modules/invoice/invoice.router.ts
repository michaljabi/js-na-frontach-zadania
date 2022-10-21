import express from "express";
import { getInvoices } from "./invoice.controller";

const router = express.Router();

router.get("/", getInvoices);

export { router };
