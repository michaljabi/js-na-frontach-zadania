import { User } from "../models/User";

export function hasAddress(user: User): boolean {
  return Boolean(user.address);
}

export function hasGivenAge(requiredAge: number): (user: User) => boolean {
  return (user) => user.age >= requiredAge;
}

export function prepareText(
  user: User,
  isAdult: (user: User) => boolean
): string {
  return `User ${user.name} is ${isAdult(user) ? "adult" : "minor"}
  and has${hasAddress(user) ? "" : " no"} address.`;
}
