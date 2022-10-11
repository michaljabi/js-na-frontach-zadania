import { PrismaClient, Order, Product } from '@prisma/client'

const prisma = new PrismaClient()

export const getOrder = async (orderId: string): Promise<Order> => {
    return prisma.order.findUniqueOrThrow({
        where: {
            id: orderId
        },
        include: {
            products: true
        }
    })
}

export const getAllOrders = async (login: string): Promise<Order[]> => {
    return prisma.order.findMany({
        where: {
            userLogin: login
        },
        include: {
            products: true
        }
    })
}

export const createOrder = async (login: string, products: Product[]) => {
    const result = await prisma.order.create({
        data: {
            user: {
                connect: { login }
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
    return getOrder(result.id)
}
