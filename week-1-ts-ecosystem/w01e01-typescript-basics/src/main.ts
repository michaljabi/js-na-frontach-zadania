import { hasGivenAge } from './common/validators/has-given-age';
import { hasAddress } from './common/validators/has-address';
import { User } from './models/users/user';

const user: User = {
  name: 'Andy',
  age: 30,
  email: 'andy@mail-me-tomorrow.com',
  address: {
    street: 'Strange Alley',
    no: 23
  }
};

const isAdult = hasGivenAge(18);

// eslint-disable-next-line no-console
console.log(`User ${user.name} is ${isAdult(user) ? 'adult' : 'minor'}`);
// eslint-disable-next-line no-console
console.log(`and has${hasAddress(user) ? '' : ' no'} address`);
