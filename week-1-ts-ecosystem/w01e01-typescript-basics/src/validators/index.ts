import { User } from "../types";

const hasAddress = (user: User) => !!user.address;
const hasGivenAge = (requiredAge: number) => (user: User) =>
  user.age >= requiredAge;

const isAdult = hasGivenAge(18);

export { hasAddress, isAdult };
