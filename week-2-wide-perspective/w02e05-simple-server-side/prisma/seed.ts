import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const clients = [
  { id: 1, username: "franek", password: "franek123" },
  { id: 2, username: "baranek", password: "baranek123" },
];

const products = [
  { id: 1, name: "Macbook", price: 6000 },
  { id: 2, name: "iPhone", price: 3000 },
];

const orders: Prisma.OrderCreateInput = {
  date: new Date(),
  client: {
    connect: {
      id: 1,
    },
  },
  products: {
    create: [
      {
        price: 5000,
        product: {
          connect: {
            id: 1,
          },
        },
      },
      {
        price: 2000,
        product: {
          connect: {
            id: 2,
          },
        },
      },
    ],
  },
  invoice: {
    create: {
      client: {
        connect: {
          id: 1,
        },
      },
    },
  },
};
const load = async () => {
  try {
    await prisma.client.deleteMany();
    console.log(`Deleted all clients`);

    await prisma.product.deleteMany();
    console.log(`Deleted all products`);

    await prisma.order.deleteMany();
    console.log(`Deleted all orders`);

    await prisma.orderOfProducts.deleteMany();
    console.log(`Deleted all orderOfProducts`);

    await prisma.invoice.deleteMany();
    console.log(`Deleted all invoices`);

    console.log(`Start seeding ...`);

    for (const data of clients) {
      const client = await prisma.client.create({
        data,
      });
      console.log(`Created client: ${client.id}`);
    }

    for (const data of products) {
      const product = await prisma.product.create({
        data,
      });
      console.log(`Created product: ${product.id}`);
    }

    const order = await prisma.order.create({ data: orders });

    console.log("Order created:", order);
  } catch (e) {
    console.log(e);
  } finally {
    await prisma.$disconnect();
  }
};
load();
