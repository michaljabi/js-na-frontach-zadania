import { checkSchema } from 'express-validator'
import { getArraysDiff } from '../utils/arrays.js'
import { getProducts } from '../products/products.service.js'

export const createOrderValidator = () => checkSchema({
    products: {
        customSanitizer: {
            options: (ids: unknown[]) => ids.map(id => String(id))
        },
        isArray: {
            bail: true,
            options: {
                min: 1,

            }
        },
        custom: {
            options: async (ids: string[]) => {
                const result = await getProducts(ids)
                const diff = getArraysDiff(ids, result.map(({ id }) => id))
                if (diff.length > 0) {
                    return Promise.reject(diff.map(id =>({
                        [id]: 'Product doesn\'t exist in db'
                    })))
                }
                return true
            }
        },
    }
})
