import express from "express";
import { login, register } from "./user.controller";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);

export { router };
