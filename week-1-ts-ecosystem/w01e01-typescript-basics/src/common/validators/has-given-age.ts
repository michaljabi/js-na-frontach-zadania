import { User } from '../../models/users';

export function hasGivenAge(requiredAge: number): (user: User) => boolean {
  return (user: User): boolean => user.age >= requiredAge;
}
