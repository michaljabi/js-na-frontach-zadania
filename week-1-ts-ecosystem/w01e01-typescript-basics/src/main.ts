import { user } from "./data";
import { hasAddress, hasGivenAge } from "./utils";

const isAdult = hasGivenAge(18);

console.log(`User ${user.name} is ${isAdult(user) ? "adult" : "minor"}`);
console.log(`and has${hasAddress(user) ? "" : " no"} address`);
