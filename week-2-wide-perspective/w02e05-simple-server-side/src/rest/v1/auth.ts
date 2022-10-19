import express, { Request, Response } from "express";
import Container from "typedi";
import { isAuth } from "../../middlewares/auth.middleware";
import { AuthService } from "../../services/auth/auth.service";
import { UserService } from "../../services/user/user.service";
import { registerUserPayloadValidator } from '../../validators/auth';

const authRouter = express.Router();

authRouter.post("/register", registerUserPayloadValidator, async (req, res) => {
  const authService = Container.get(AuthService);
  const token = await authService.register(req.body.email, req.body.password);
  res.cookie(authService.TOKEN_COOKIE_KEY, token);
  res.status(204).send()
});

authRouter.post("/login", registerUserPayloadValidator, async (req, res) => {
  const authService = Container.get(AuthService);
  const token = await authService.login(req.body.email, req.body.password);
  res.cookie(authService.TOKEN_COOKIE_KEY, token);
  res.status(204).send()
});

authRouter.get("/me", isAuth, async (req: Request, res: Response) => {
  const userService = Container.get(UserService);
  const user = await userService.getByEmail(req.user.email);
  res.status(200).json({ ...user, password: '' });
});

authRouter.get("/logout", isAuth, async (req: Request, res: Response) => {
  const authService = Container.get(AuthService);
  res.clearCookie(authService.TOKEN_COOKIE_KEY);
  res.status(204).send()
});

export { authRouter };
