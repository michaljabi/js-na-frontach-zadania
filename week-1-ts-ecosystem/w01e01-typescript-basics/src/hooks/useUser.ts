import {User} from "../types/User";

type useUserTypes ={
  hasGivenAge:(requiredAge: number) => (user: User) => boolean
}

export const useUser = ():useUserTypes =>{
  function hasGivenAge(requiredAge:number){
    return (user: User) => user.age >= requiredAge
  }

  return {
    hasGivenAge
  }
}
