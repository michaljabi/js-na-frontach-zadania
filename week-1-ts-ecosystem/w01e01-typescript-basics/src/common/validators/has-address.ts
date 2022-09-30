import { User } from '../../models/users/user';

export function hasAddress(user: User): boolean {
  return Boolean(user.address);
}
