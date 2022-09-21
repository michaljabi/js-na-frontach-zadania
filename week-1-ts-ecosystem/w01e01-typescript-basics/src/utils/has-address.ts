import { User } from "types";

export function hasAddress(user: User): boolean {
  return Boolean(user.address);
}
