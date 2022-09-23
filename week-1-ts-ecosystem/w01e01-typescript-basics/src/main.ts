/**
 * Zasady co do pliku:
 *
 * Możesz dowolnie modyfikować zawartość tego pliku,
 * całość programu musi jednak działać tak jak do tej pory !
 *
 * */

import { User } from "./models";
import { hasAddress, isAdult } from "./validators/user.validators";

const user: User = {
  name: "Andy",
  age: 30,
  email: "andy@mail-me-tomorrow.com",
  address: {
    street: "Strange Alley",
    no: 23,
  },
};

console.log(`User ${user.name} is ${isAdult(user) ? "adult" : "minor"}`);
console.log(`and has${hasAddress(user) ? "" : " no"} address`);
