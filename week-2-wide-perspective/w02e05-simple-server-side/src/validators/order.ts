import { createValidator } from "express-joi-validation";
import Joi from "joi";

const validator = createValidator();

const createOrderSchema = Joi.object({
  products: Joi.array().items(
    Joi.object({
      id: Joi.string().required(),
      quantity: Joi.number().required(),
    })
  ),
});

export const createOrderPayloadValidator = validator.body(createOrderSchema);
