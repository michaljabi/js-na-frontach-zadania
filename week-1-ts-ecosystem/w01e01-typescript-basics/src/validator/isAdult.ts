import {UserModel} from '../model/User.model';

export const isAdult = hasGivenAge(18)

function hasGivenAge(requiredAge: number) : (user: UserModel) => boolean {
    return (user: UserModel): boolean => user.age >= requiredAge
}