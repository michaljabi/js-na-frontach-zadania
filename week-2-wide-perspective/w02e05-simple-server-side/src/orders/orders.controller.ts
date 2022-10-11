import { TokenUser } from '../types/user.js'
import { Router, Request, Response } from 'express'
import { createOrderValidator } from './orders.validator.js'
import { getProducts } from '../products/products.service.js'
import { createOrder, getAllOrders } from './orders.service.js'
import { validateRequest } from '../validators/validators.service.js'

export const router = Router()

router.get(
    '/',
    async (req: Request, res: Response) => {
    const user = req.user as TokenUser
    const orders = await getAllOrders(user.login)
    res.status(200).json(orders)
})

type CreateOrderBody = {
    products: string[]
}

router.post(
    '/',
    createOrderValidator(),
    async (req: Request, res: Response) => {
        validateRequest(req)
        const user = req.user as TokenUser
        const { products: productsIds } = req.body as CreateOrderBody
        const products = await getProducts(productsIds)
        const order = await createOrder(user.login, products)
        res.status(200).json(order)
})
