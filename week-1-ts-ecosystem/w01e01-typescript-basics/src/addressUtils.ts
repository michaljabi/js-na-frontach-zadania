import type {IUser} from "./types/user";

export function hasAddress(user: IUser): boolean {
	return Boolean(user.address)
}
