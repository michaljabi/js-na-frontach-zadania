import { Router } from "express";
import { fruitsRepository } from "./fruits.repository.js";

export const fruitsController = new Router();

fruitsController.get("", (req, res) => {
  res.json(res.result);
});

fruitsController.get("/:id", (req, res) => {
  const { id } = req.params;
  const fruit = fruitsRepository.findOne({ id: Number(id) });
  res.json(fruit || {});
});
