import { Request, Response } from "express";
import { prisma } from "../../../prisma/db";

export const getInvoices = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    if (!user) return res.status(400).json({ message: "User not found" });
    const invoices = await prisma.invoice.findMany({
      where: {
        clientId: user.id,
      },
      include: {
        order: true,
      },
    });
    if (!invoices) {
      return res.status(400).json({ message: "Invoices not found" });
    }

    return res.status(200).json(invoices);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong:", error });
  }
};
