import { rest } from "msw";
import { ordersFakeData } from "../orders/orders.fake-data";

export const handlers = [
  rest.get("/orders", (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(ordersFakeData));
  }),
];
