import { NextFunction, Request, Response } from "express";
import Container from "typedi";
import { AuthService } from "../services/auth/auth.service";
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

  if (!userPayload.email) {
    return next(new BaseHttpError("Unathorized", 401, "UNATHORIZED"));
  }

  req.user = userPayload;
  next();
};
