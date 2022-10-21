import { NextFunction, Request, Response } from "express";

import { Token, verifyAccessToken } from "../utils/jwt";
import { prisma } from "../../prisma/db";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res.status(403).send("A token is required for authentication");
  }

  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const { decoded } = verifyAccessToken(token) as Token;

    const user = await prisma.client.findUnique({
      where: { id: decoded.userID },
    });

    if (!user) return null;

    req.user = user;

    return next();
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
};
