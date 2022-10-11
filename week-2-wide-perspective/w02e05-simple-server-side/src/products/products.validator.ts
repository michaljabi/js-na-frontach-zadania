import { checkSchema } from 'express-validator'

export const createProductValidator = () => checkSchema({
    name: {
        in: ['body'],
        isLength: {
            bail: true,
            options: {
                min: 3
            }
        }
    },
    price: {
        isFloat: {
            options: {
                min: 0
            }
        }
    }
})
