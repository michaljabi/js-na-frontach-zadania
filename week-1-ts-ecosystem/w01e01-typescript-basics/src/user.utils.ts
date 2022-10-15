import { User } from './user.interface';

const hasGivenAge = (requiredAge: number): ((user: User) => boolean) => {
  return (user: User): boolean => user.age >= requiredAge;
};

export const hasAddress = (user: User): boolean => {
  return Boolean(user.address);
};

export const isAdult = hasGivenAge(18);
