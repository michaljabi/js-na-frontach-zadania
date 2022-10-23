import { prisma } from '../prisma-client';

export const getAllProducts = async () => {
    return await prisma.product.findMany();
}