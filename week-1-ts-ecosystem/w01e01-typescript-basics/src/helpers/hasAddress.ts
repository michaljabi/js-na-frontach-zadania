import { User } from "../types";

function hasAddress(user: User) {
  return Boolean(user.address);
}

export default hasAddress;
