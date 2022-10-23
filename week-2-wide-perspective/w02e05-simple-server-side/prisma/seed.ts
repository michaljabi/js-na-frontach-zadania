import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
import bcrypt from "bcrypt";

async function seed() {
    await prisma.user.deleteMany();
    await prisma.product.deleteMany();
    await prisma.token.deleteMany();
    await prisma.order.deleteMany();

    await prisma.user.create({
        data: {
            email: "damian@ww.pl",
            password: await bcrypt.hash('damian', 5),
        }
    })

    await prisma.user.create({
        data: {
            email: "wojtek@ww.pl",
            password: await bcrypt.hash('wojtek', 5),
        }
    })

    await prisma.product.create({
        data: {
            name: "Orange",
            price: 9.12,
        }
    })

    await prisma.product.create({
        data: {
            name: "Apple",
            price: 1.61,
        }
    })

    await prisma.product.create({
        data: {
            name: "Lemon",
            price: 2.45,
        }
    })


    await prisma.token.create({
        data: {
            value: 'my-token',
            user: {
                connect: { email: 'wojtek@ww.pl' }
            }
        }
    })
}

seed().then();