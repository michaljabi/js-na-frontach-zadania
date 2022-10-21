import { Request, Response } from "express";
import { prisma } from "../../../prisma/db";
import { Prisma } from "@prisma/client";
import { authInput } from "./user.schema";
import { createAccessToken } from "../../utils/jwt";
import bcrypt from "bcrypt";
export const register = async (
  req: Request<{}, {}, authInput>,
  res: Response
) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await prisma.client.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    const accessToken = createAccessToken(newUser.id);

    return res
      .status(200)
      .json({ message: "User created!", username, token: accessToken });
  } catch (error: any) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return res.status(409).json({
          status: "fail",
          message: "Username already exist, please use another",
        });
      }
    }

    return res.status(500).json({ message: error.message });
  }
};

export const login = async (req: Request<{}, {}, authInput>, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await prisma.client.findUnique({
      where: {
        username,
      },
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    const uncryptedPassword = await bcrypt.compare(password, user.password);

    if (!uncryptedPassword) {
      return res.status(400).json({ message: "Wrong credentials" });
    }
    const accessToken = createAccessToken(user.id);

    return res.status(200).json({ username, token: accessToken });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
