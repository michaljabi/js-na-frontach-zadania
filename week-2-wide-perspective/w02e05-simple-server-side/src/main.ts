import 'express-async-errors'
import express from 'express'
import { logger } from './logger.js'
import { router } from './router.js'
import { errorHandler } from './error.handler.js'

const app = express()

app.use(express.json())
app.use(router)
app.use(errorHandler)

app.listen(4000)

process.on('uncaughtException', (err) => {
    logger.log({ level: 'error', message: err.message })
})
