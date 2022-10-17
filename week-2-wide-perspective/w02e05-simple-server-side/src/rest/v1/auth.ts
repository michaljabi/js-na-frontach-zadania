import express, { Request, Response } from "express";
import Container from "typedi";
import { isAuth } from "../../middlewares/auth.middleware";
import { AuthService } from "../../services/auth/auth.service";
import { UserService } from "../../services/user/user.service";

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const authService = Container.get(AuthService);
  const token = await authService.register(req.body.email, req.body.password);
  res.status(204).cookie(authService.TOKEN_COOKIE_KEY, token);
});

authRouter.post("/login", async (req, res) => {
  const authService = Container.get(AuthService);
  const token = await authService.login(req.body.email, req.body.password);
  res.status(204).cookie(authService.TOKEN_COOKIE_KEY, token);
});

authRouter.get("/me", isAuth, async (req: Request, res: Response) => {
  const userService = Container.get(UserService);
  const user = await userService.getByEmail(req.user.email);
  res.status(200).json({ ...user });
});

authRouter.get("/logout", isAuth, async (req: Request, res: Response) => {
  const authService = Container.get(AuthService);
  res.status(204).clearCookie(authService.TOKEN_COOKIE_KEY);
});

export { authRouter };
