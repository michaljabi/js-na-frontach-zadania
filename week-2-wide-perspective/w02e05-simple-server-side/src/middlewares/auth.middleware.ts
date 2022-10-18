import { NextFunction, Request, Response } from "express";
import Container from "typedi";
import { AuthService } from "../services/auth/auth.service";
import { UserService } from "../services/user/user.service";
import { BaseHttpError } from "../utils/errors";

export const isAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authService = Container.get(AuthService);
  const token: string | undefined = req.cookies[authService.TOKEN_COOKIE_KEY];

  if (!token) {
    return next(new BaseHttpError("Unathorized", 401, "UNATHORIZED"));
  }

  const userPayload = await authService.getUserFromToken(token);

  if (!userPayload.id) {
    return next(new BaseHttpError("Unathorized", 401, "UNATHORIZED"));
  }

  const userService = Container.get(UserService);
  const user = await userService.getById(userPayload.id);

  if (!user) {
    return next(new BaseHttpError("Unathorized", 401, "UNATHORIZED"));
  }

  req.user = { id: user.id, email: user.email };
  next();
};
