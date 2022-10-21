import { User } from "../../modules/user/user.types";

declare global {
  namespace Express {
    export interface Request {
      user?: User;
    }
  }
}
