import { Request, Response } from "express";
import { prisma } from "../../../prisma/db";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();

    if (!products)
      return res.status(400).json({ message: "Products not found" });

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong:", error });
  }
};

export const getProduct = async (
  req: Request<{ id: number }>,
  res: Response
) => {
  try {
    const { id } = req.params;

    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!product) return res.status(400).json({ message: "Product not found" });

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong:", error });
  }
};
