import { Request, Response } from "express";
import { prisma } from "../../../prisma/db";
import { Product } from "../products/product.types";

export const createOrder = async (
  req: Request<{}, {}, Product[]>,
  res: Response
) => {
  try {
    const products = req.body;
    const user = req.user;

    if (!user || !products)
      return res.status(404).json({ message: "Wrong request" });

    const mappedProducts = products.map((product) => {
      return {
        price: product.price,
        product: {
          connect: {
            id: product.id,
          },
        },
      };
    });

    const order = await prisma.order.create({
      data: {
        date: new Date(),
        client: {
          connect: {
            id: user?.id,
          },
        },
        products: {
          create: mappedProducts,
        },
        invoice: {
          create: {
            createdAt: new Date(),
            client: {
              connect: {
                id: user.id,
              },
            },
          },
        },
      },
    });
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong:", error });
  }
};

export const getOrders = async (req: Request, res: Response) => {
  try {
    const user = req.user;

    if (!user) return res.status(400).json({ message: "User not found" });

    const client = await prisma.client.findUnique({ where: { id: user.id } });

    const orders = await prisma.order.findMany({
      where: { clientId: client?.id },
    });

    if (!orders) return res.status(400).json({ message: "Orders not found" });

    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong:", error });
  }
};
