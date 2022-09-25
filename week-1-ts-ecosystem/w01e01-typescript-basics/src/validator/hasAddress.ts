import {UserModel} from '../model/User.model';

export function hasAddress(user: UserModel): boolean {
    return Boolean(user.address)
}