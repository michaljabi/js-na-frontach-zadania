import { Router } from "express";
import { fruitsRepository } from "./fruits.repository.js";
import { pagination } from "../middleware/pagination.middleware.js";

export const fruitsController = new Router();

fruitsController.get("", [pagination({ skipKey: "drop" })], (req, res) => {
  const fruits = fruitsRepository.find({
    skip: req.skip,
    limit: req.limit,
  });
  res.json(fruits);
});

fruitsController.get("/:id", (req, res) => {
  const { id } = req.params;
  const fruit = fruitsRepository.findOne({ id: Number(id) });
  res.json(fruit || {});
});
