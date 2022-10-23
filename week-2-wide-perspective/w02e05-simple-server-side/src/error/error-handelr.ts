import { Request, Response, NextFunction } from 'express'
import { ValidationError } from 'express-json-validator-middleware'
import { logger } from '../logger'
import { mapErrors } from '../middleware/validation.middleware'

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    let status = 500
    let errors: string | Error = err

    if (err instanceof ValidationError) {
        status = 400
        errors = mapErrors(err.validationErrors.body || err.validationErrors.params)
        logger.error(errors)
    }

    res.status(status).json({
        errors
    })
}