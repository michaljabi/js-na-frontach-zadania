import express from "express";
import { getProduct, getProducts } from "./products.controller";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);

export { router };
