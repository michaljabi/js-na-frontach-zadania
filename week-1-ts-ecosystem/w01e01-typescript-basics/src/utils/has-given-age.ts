import { User } from "types";

export function hasGivenAge(requiredAge: number): (user: User) => boolean {
  return (user) => user.age >= requiredAge;
}
