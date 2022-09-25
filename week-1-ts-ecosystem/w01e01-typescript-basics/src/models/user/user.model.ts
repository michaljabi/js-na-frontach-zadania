import {ADULT_AGE} from "../../core";
import {hasGivenAge} from "../../utils";
import {Addres} from "../address";

export interface User {
    name: string;
    age: number;
    email: string;
    address: Addres;
}

export namespace User {
    export function hasAddress(user: User): boolean {
        return Boolean(user.address)
    }

    export const isAdult  = hasGivenAge(ADULT_AGE);
}