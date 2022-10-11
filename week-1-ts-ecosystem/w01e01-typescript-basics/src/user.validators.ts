import { ADULT_AGE } from './data'
import { UserType } from './User.d'

export function hasAddress(user: UserType): boolean {
    return Boolean(user.address)
  }
  
function hasGivenAge(requiredAge: number): Function {
    return (user: UserType): boolean => user.age >= requiredAge
  }
  
export const isAdult = hasGivenAge(ADULT_AGE)