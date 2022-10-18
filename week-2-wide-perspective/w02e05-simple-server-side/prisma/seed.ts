import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const product1 = await prisma.product.upsert({
    where: {id: '1'},
    update: {},
    create: {
      name: "Product 1",
      price: 12.99,
    },
  });

  const product2 = await prisma.product.upsert({
    where: {id: '1'},
    update: {},
    create: {
      name: "Product 2",
      price: 399.99,
    },
  });

  const product3 = await prisma.product.upsert({
    where: {id: '1'},
    update: {},
    create: {
      name: "Product 3",
      price: 129.99,
    },
  });

  console.log(product1, product2, product3)
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
