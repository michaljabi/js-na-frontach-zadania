import {AddressModel} from './Address.model';

export interface UserModel {
    name: string,
    age: number,
    email: string,
    address: AddressModel,
}