import { User } from '../../models/users';

export function hasAddress(user: User): boolean {
  return Boolean(user.address);
}
