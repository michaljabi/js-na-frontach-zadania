import {ADULT_AGE} from "../core/constants";
import {User} from "../models/user/user.model";

export namespace UserValidators {
    export function hasAddress(user: User): boolean {
        return Boolean(user.address)
    }
    export const isAdult  = hasGivenAge(ADULT_AGE);
}

function hasGivenAge(requiredAge: number): (user: User)=>boolean {
    return (user: User): boolean => user.age >= requiredAge
}
