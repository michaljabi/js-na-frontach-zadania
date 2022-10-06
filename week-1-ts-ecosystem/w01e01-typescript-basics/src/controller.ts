import { ADULT_AGE, User } from './data'

export function hasAddress(user: User): boolean {
    return Boolean(user.address)
  }
  
function hasGivenAge(requiredAge: number): Function {
    return (user: User): boolean => user.age >= requiredAge
  }
  
export const isAdult = hasGivenAge(ADULT_AGE)