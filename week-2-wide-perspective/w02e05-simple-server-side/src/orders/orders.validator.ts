import { JSONSchema7 } from "json-schema";

export const CreateOrderScheme: JSONSchema7 = {
    type: "object",
    required: ["orderProduct"],
    properties: {
        orderProduct: {
            type: "array",
            items: {
                type: "object",
                required: ["productId", "quantity"],
                properties: {
                    productId: {
                        type: "number",
                    },
                    quantity: {
                        type: "number",
                    }
                },
            }
        },
    },
};