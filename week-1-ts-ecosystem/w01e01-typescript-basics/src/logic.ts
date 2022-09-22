import { IFunction, IUser } from "./types";

export function hasGivenAge(requiredAge: number): IFunction {
  return (user: IUser) => user.age >= requiredAge;
}

export function hasAddress(user: IUser): boolean {
  return Boolean(user.address);
}
