import { User } from "./user.interface";

export function hasAddress(user: User): boolean {
  return Boolean(user.address);
}

export function hasGivenAge(requiredAge: number): Function {
  return (user: User): boolean => user.age >= requiredAge;
}
