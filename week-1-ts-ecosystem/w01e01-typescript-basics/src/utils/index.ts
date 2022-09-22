import { IUser } from "../types";

export const hasAddress = (user: IUser) => Boolean(user.address);
export const hasGivenAge = (requiredAge: number) => (user: IUser) => {
  return user.age >= requiredAge;
};
