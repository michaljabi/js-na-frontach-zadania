import { User } from "./models/User";
import * as utils from "./utils/utils";

const user: User = {
  name: "Andy",
  age: 30,
  email: "andy@mail-me-tommorow.com",
  address: {
    street: "Strange Alley",
    no: 23,
  },
};

const isAdult = utils.hasGivenAge(18);

console.log(`User ${user.name} is ${isAdult(user) ? "adult" : "minor"}`);
console.log(`and has${utils.hasAddress(user) ? "" : " no"} address`);
