import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

await prisma.user.deleteMany({})
await prisma.order.deleteMany({})
await prisma.product.deleteMany({})

await prisma.user.createMany({
    data: [
        {
            name: 'dawid',
            login: 'login',
            password: await bcrypt.hash('password', 10),
            role: 'ADMIN'
        },
        {
            name: 'jerry',
            login: 'login2',
            password: await bcrypt.hash('password2', 10),
            role: 'USER'
        }
    ]
})

await prisma.product.createMany({
    data: [
        {
            name: 'Kit Kat',
            price: 1.99
        },
        {
            name: 'Lion',
            price: 1.50
        },
        {
            name: 'Kinder Bueno',
            price: 2.99
        },
        {
            name: 'Knoppers',
            price: 1.20
        },
        {
            name: '3 Bit',
            price: 2.50
        }
    ]
})

const products = await prisma.product.findMany()

await prisma.order.create({
    data: {
        user: {
            connect: { login: 'login' }
        },
        products: {
            create: products.map(product => ({
                price: product.price,
                product: {
                    connect: { id: product.id }
                }
            }))
        }
    }
})

await prisma.order.create({
    data: {
        user: {
            connect: { login: 'login2' }
        },
        products: {
            create: products.map(product => ({
                price: product.price,
                product: {
                    connect: { id: product.id }
                }
            }))
        }
    }
})

