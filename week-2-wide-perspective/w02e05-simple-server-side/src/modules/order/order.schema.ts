import z from "zod";

export const orderSchema = z.object({
  body: z.array(
    z.object({
      id: z.number({
        required_error: "Id is required",
      }),
      name: z.string({
        required_error: "Name is required",
      }),
      price: z.number({
        required_error: "Price is required",
      }),
    })
  ),
});

export type orderInput = z.TypeOf<typeof orderSchema>["body"];
