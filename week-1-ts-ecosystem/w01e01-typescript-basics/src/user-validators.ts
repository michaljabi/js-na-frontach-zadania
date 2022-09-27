import { AgeValidator, User } from "./types";

export function hasGivenAge(requiredAge: number): AgeValidator {
  return (user: User) => user.age >= requiredAge;
}

export function hasAddress(user: User): boolean {
  return Boolean(user.address);
}
