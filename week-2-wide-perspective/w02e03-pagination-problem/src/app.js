import express from "express";
import { fruitsController } from "./fruits/fruits.controller.js";
import { fruitsRepository } from "./fruits/fruits.repository.js";
import { mainController } from "./main/main.controller.js";
import { paginate } from "./pagination-middlewear.js";
import { usersController } from "./users/users.controller.js";
import { usersRepository } from "./users/users.repository.js";

export const app = express();

app.use(express.json());

app.use(mainController);
app.use("/users", paginate(usersRepository), usersController);
app.use("/fruits", paginate(fruitsRepository), fruitsController);
