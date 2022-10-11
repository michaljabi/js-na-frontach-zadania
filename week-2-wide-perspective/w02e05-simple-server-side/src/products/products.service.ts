import { PrismaClient, Product } from '@prisma/client'

const prisma = new PrismaClient()

export const getProducts = async (ids: string[]): Promise<Product[]> => {
    return prisma.product.findMany({
        where: {
            OR: ids.map(id => ({id}))
        }
    })
}

export const getAllProducts = async (): Promise<Product[]> => {
    return prisma.product.findMany()
}

export type ProductData = Pick<Product, 'price' | 'name'>

export const createProduct = async (data: ProductData): Promise<Product> => {
    return prisma.product.create({ data })
}
