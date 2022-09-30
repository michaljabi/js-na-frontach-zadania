import { User } from '../../models/users/user';

export function hasGivenAge(requiredAge: number) {
  return (user: User): boolean => user.age >= requiredAge;
}
