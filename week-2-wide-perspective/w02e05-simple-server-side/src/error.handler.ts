import { logger } from './logger.js'
import { Request, Response, NextFunction } from 'express'
import { HTTPError, ValidationError } from './classes/Error.js'

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    const { message: errorMessage, stack: errorStack = '' } = err
    let status = 500
    let errors = undefined
    let message = errorMessage
    let stack = process.env.NODE_ENV === 'development' ? errorStack.split('\n') : undefined

    if (err instanceof HTTPError) {
        status = err.status
    }
    if (err instanceof ValidationError) {
        errors = err.errors
    }

    logger.log({ level: 'error', message })
    res.status(status).json({
        message,
        ...errors !== undefined && { errors },
        ...stack !== undefined && { stack }
    })
}
