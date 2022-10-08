import { IUser } from "./types";

export function hasAddress(user: IUser): boolean {
  return Boolean(user.address);
}

export function hasGivenAge(requiredAge: number): (user: IUser) => boolean {
  return (user: IUser): boolean => user.age >= requiredAge;
}
