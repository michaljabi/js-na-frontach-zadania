import { Prisma } from "@prisma/client";
import { Service } from "typedi";
import { dbClient } from "../../database/client";
import { BaseHttpError } from "../../utils/errors";

@Service()
export class OrderRepository {
  async getById(id: string, userId: string) {
    const [order] = await dbClient.order.findMany({
      where: { id, userId },
      include: {
        items: true,
      },
    });

    if (!order) {
      throw new BaseHttpError("Order not found", 404, "ORDER_NOT_FOUND");
    }

    return order;
  }

  getAll(userId: string) {
    return dbClient.order.findMany({
      where: { userId },
      include: {
        items: true,
      },
    });
  }

  async create(userId: string, products: { id: string; quantity: number }[]) {
    const resolvedProducts = await Promise.all(
      products.map((product) =>
        dbClient.product.findUnique({ where: { id: product.id } })
      )
    );

    const orderItems: {
      productId: string;
      quantity: number;
      price: Prisma.Decimal;
    }[] = [];

    products.forEach(({ id, quantity }) => {
      const product = resolvedProducts.find((product) => product?.id === id);

      if (!product) {
        throw new BaseHttpError(
          `Could not found product wih id ${id}`,
          422,
          "PRODUCT_NOT_FOUND_ON_ORDER"
        );
      }

      orderItems.push({
        productId: product.id,
        quantity,
        price: product.price,
      });
    });

    return dbClient.order.create({
      data: {
        userId,
        items: {
          create: orderItems,
        },
      },
    });
  }

  remove(id: string) {
    return dbClient.product.delete({ where: { id } });
  }
}
