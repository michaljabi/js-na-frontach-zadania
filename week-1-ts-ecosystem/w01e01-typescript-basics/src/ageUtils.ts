import type {IUser} from "./types/user";

export function hasGivenAge(requiredAge: number) {
	return (user: IUser): boolean => user.age >= requiredAge
}
