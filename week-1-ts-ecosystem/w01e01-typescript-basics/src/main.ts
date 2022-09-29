import { User } from "./models/user/user.model";
import {UserValidators} from "./utils/user.validators";

const user: User = {
  name: 'Andy',
  age: 30,
  email: 'andy@mail-me-tommorow.com',
  address: {
    street: 'Strange Alley',
    no: 23,
  }
};

console.log(`User ${user.name} is ${UserValidators.isAdult(user) ? 'adult' : 'minor'}`)
console.log(`and has${UserValidators.hasAddress(user) ? '' : ' no'} address`)
