import { Router } from "express";
import { usersRepository } from "./users.repository.js";

export const usersController = new Router();

usersController.get("", (req, res) => {
  res.json(res.result);
});

usersController.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = usersRepository.findOne({ id: Number(id) });
  res.json(user || {});
});
