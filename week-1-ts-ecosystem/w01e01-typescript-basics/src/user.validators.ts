import { User } from './user.model';

export const hasAddress = (user: User): boolean => {
  return Boolean(user.address);
};

export const hasGivenAge = (requiredAge: number): ((user: User) => boolean) => {
  return (user: User): boolean => user.age >= requiredAge;
};

export const isAdult = hasGivenAge(18);
