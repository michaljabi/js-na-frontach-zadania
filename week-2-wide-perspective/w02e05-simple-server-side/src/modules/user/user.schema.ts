import z from "zod";

export const authSchema = z.object({
  body: z.object({
    username: z.string({
      required_error: "Username is required",
    }),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(6, "Password is too short"),
  }),
});

export type authInput = z.TypeOf<typeof authSchema>["body"];
