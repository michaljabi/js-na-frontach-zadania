import {User} from "./types";

const hasAddress = (user: User): boolean => Boolean(user.address);

const hasGivenAge = (requiredAge: number): (user: User) => boolean => (
    (user): boolean => user.age >= requiredAge
);

export {
    hasAddress,
    hasGivenAge,
}
