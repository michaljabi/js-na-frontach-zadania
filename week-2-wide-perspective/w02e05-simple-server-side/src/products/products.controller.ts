import { Router, Request, Response } from 'express'
import { createProductValidator } from './products.validator.js'
import { validateRequest } from '../validators/validators.service.js'
import { createProduct, getAllProducts, type ProductData } from './products.service.js'

export const router = Router()

router.get(
    '/',
    async (req: Request, res: Response) => {
        res.status(200).json(await getAllProducts())
})

router.post(
    '/',
    createProductValidator(),
    async (req: Request, res: Response) => {
        validateRequest(req)
        const body = req.body as ProductData
        const product = await createProduct(body)
        res.status(200).json(product)
})
