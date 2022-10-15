import { User } from "./types";
import { hasAddress, isAdult } from "./validators";

const user: User = {
  name: "Andy",
  age: 18,
  email: "andy@mail-me-tommorow.com",
  address: { street: "Strange Alley", no: 23 },
};

console.log(`User ${user.name} is ${isAdult(user) ? "adult" : "minor"}`);
console.log(`and has${hasAddress(user) ? "" : " no"} address`);
