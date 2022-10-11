import { Request } from 'express'
import { errorFormatter } from '../utils/errors.js'
import { validationResult } from 'express-validator'
import { ValidationError } from '../classes/Error.js'

export const validateRequest = (req: Request) => {
    const errors = validationResult(req).formatWith(errorFormatter)
    if (!errors.isEmpty()) {
        throw new ValidationError(errors.array())
    }
}

