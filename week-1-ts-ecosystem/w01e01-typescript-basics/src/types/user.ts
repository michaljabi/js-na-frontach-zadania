import type {IAddress} from "./address";

export interface IUser {
	name: string,
	age: number,
	email: string,
	address: IAddress
}
