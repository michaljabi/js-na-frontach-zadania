import express from 'express'
import { errorHandler } from './error/error-handelr'
import { ordersController } from './orders/orders.controller'
import { productController } from './products/product.controller'
import { usersController } from './users/users.controller'

const app = express()
app.use(express.json())

app.listen(3100)
app.use('/orders', ordersController)
app.use('/products', productController)
app.use('/users', usersController)
app.use(errorHandler)