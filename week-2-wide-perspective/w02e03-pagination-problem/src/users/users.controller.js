import { Router } from "express";
import { usersRepository } from "./users.repository.js";
import { pagination } from "../middlewares/pagination.js";

export const usersController = new Router();

usersController.get("", pagination("drop", "customLimit"), (req, res) => {
  const users = usersRepository.find({
    skip: req.computedSkip,
    limit: req.computedLimit,
  });
  res.json(users);
});

usersController.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = usersRepository.findOne({ id: Number(id) });
  res.json(user || {});
});
