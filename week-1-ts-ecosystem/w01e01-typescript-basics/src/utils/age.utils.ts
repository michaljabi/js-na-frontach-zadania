import {User} from "../models"

export function hasGivenAge(requiredAge: number): (user: User)=>boolean {
    return (user: User): boolean => user.age >= requiredAge
}