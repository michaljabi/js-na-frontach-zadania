import {UserType} from "./types";

const hasAddress = (user: UserType): boolean => Boolean(user.address);

const hasGivenAge = (requiredAge: number): (UserType) => boolean => (
    (user): boolean => user.age >= requiredAge
);

export {
    hasAddress,
    hasGivenAge,
}
