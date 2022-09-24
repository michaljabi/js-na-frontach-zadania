import {User} from '../models/User';

export function hasAddress(user: User) {
  return Boolean(user.address)
}

export function hasGivenAge(requiredAge: number) {
  return (user: User) => user.age >= requiredAge
}