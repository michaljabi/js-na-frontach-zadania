import { Router } from "express";
import { usersRepository } from "./users.repository.js";
import { pagination } from "../middleware/pagination.middleware.js";

export const usersController = new Router();

usersController.get("", [pagination], (req, res) => {
  const users = usersRepository.find({
    skip: req.pagination.skip,
    limit: req.pagination.limit,
  });
  res.json(users);
});

usersController.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = usersRepository.findOne({ id: Number(id) });
  res.json(user || {});
});
