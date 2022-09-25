import {Addres, User} from "./models";

const address: Addres = {
  street: 'Strange Alley',
  no: 23,
};

const user: User = {
  name: 'Andy',
  age: 30,
  email: 'andy@mail-me-tommorow.com',
  address
};

console.log(`User ${user.name} is ${User.isAdult(user) ? 'adult' : 'minor'}`)
console.log(`and has${User.hasAddress(user) ? '' : ' no'} address`)
