import {Addres} from "../address/address.model";

export interface User {
    name: string;
    age: number;
    email: string;
    address: Addres;
}