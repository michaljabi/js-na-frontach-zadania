import { Router } from 'express'
import { authMiddleware } from './auth/auth.middleware.js'
import { router as usersRouter } from './users/users.controller.js'
import { router as ordersRouter } from './orders/orders.controller.js'
import { router as productsRouter } from './products/products.controller.js'

export const router = Router()

router.use('/users', usersRouter)
router.use('/orders', [authMiddleware], ordersRouter)
router.use('/products', [authMiddleware], productsRouter)



