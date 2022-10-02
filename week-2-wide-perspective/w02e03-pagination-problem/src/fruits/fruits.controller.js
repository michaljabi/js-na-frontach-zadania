import { Router } from "express";
import { fruitsRepository } from "./fruits.repository.js";
import { pagination } from "../middlewares/pagination.js";

export const fruitsController = new Router();
fruitsController.get("", pagination(), (req, res) => {
  const fruits = fruitsRepository.find({
    skip: req.computedSkip,
    limit: req.computedLimit,
  });
  res.json(fruits);
});

fruitsController.get("/:id", (req, res) => {
  const { id } = req.params;
  const fruit = fruitsRepository.findOne({ id: Number(id) });
  res.json(fruit || {});
});
