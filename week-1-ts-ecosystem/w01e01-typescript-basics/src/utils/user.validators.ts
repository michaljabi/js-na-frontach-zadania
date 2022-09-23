import { User } from "../models";

export const hasAddress = (user: User) => Boolean(user.address);
export const hasGivenAge = (requiredAge: number) => (user: User) => {
  return user.age >= requiredAge;
};

export const isAdult = hasGivenAge(18);
