import {User} from './data'

function hasAddress(user: User): boolean {
    return Boolean(user.address)
  }
  
function hasGivenAge(requiredAge: number): Function {
    return (user: User): boolean => user.age >= requiredAge
}

export {hasAddress, hasGivenAge}