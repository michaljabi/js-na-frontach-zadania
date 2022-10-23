import { Validator } from "express-json-validator-middleware";

const validator = new Validator({ allErrors: true })

export function mapErrors(error: any) {
    return validator.ajv.errorsText(error)
}

export const validationMiddleware = validator.validate
