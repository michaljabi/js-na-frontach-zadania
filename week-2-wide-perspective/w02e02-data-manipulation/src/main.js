import { worker } from "./mocks/worker";

import "./orders/tiles/BestSaleTile.js";
import "./orders/tiles/TotalOrdersTile.js";
import "./orders/tiles/TotalIncomeTile.js";
import "./orders/tiles/AnnualOrdersTile.js";

if (typeof window !== undefined) {
  worker.start({
    scope: "/orders",
    onUnhandledRequest: "bypass",
  });
}
