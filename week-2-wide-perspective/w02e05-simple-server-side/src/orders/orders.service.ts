import { Product, User } from '@prisma/client';
import { prisma } from '../prisma-client';
import { OrderProduct } from './models/order-product';

export const getOrders = async () => await prisma.order.findMany({ select: { id: true, user: { select: { email: true } } } });


export const getOrderById = async (id: number) => await prisma.order.findUnique({
    where: { id: id },
    include: {
        products: {
            include: { product: true },
        },
        user: {
            select: {
                email: true
            }
        }
    }
});


export const createOrder = async (user: User, orderProduct: OrderProduct[]) => {
    return await prisma.order.create({
        data: {
            user: { connect: { email: user.email } },
            products: {
                create: orderProduct.map(el => {
                    return {
                        product: { connect: { id: el.productId } },
                        quantity: el.quantity
                    }
                })
            }
        },
    })
}