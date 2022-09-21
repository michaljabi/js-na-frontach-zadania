import {User} from "./types";

function hasAddress(user: User): boolean {
  return Boolean(user.address)
}

function hasGivenAge(requiredAge: number): (user: User) => boolean {
  return (user) => user.age >= requiredAge
}

const isAdult = hasGivenAge(18)

export {hasAddress, hasGivenAge, isAdult}
