import { User } from "../types";

export const hasAddress = (user: User) => Boolean(user.address);
export const hasGivenAge = (requiredAge: number) => (user: User) => {
  return user.age >= requiredAge;
};
