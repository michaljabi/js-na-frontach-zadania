import express from "express";
import Container from "typedi";
import { ProductService } from "../../services/product/product.service";

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const productService = Container.get(ProductService);
  const products = await productService.getAll();
  res.status(200).json({ products });
});

productRouter.get("/:productId", async (req, res) => {
  const productService = Container.get(ProductService);
  const product = await productService.getById(req.params.productId);
  res.status(200).json({ product });
});

export { productRouter };
