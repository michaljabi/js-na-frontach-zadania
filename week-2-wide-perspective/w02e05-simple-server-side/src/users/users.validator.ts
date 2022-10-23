import { JSONSchema7 } from "json-schema";

export const UserLoginScheme: JSONSchema7 = {
    type: "object",
    required: ["email", "password"],
    properties: {
        email: {
            type: "string",
        },
        password: {
            type: "string",
        }
    },
};