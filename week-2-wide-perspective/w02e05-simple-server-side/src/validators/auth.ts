import { createValidator } from "express-joi-validation";
import Joi from "joi";

const validator = createValidator();

const createRegisterSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required()
});

export const registerUserPayloadValidator = validator.body(createRegisterSchema);
