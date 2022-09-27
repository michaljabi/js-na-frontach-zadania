/**
 * Zasady co do pliku:
 *
 * Możesz dowolnie modyfikować zawartość tego pliku,
 * całość programu musi jednak działać tak jak do tej pory !
 *
 * */

import { user } from "./user-model";
import { hasAddress, hasGivenAge } from "./user-validators";

const isAdult = hasGivenAge(18);

console.log(`User ${user.name} is ${isAdult(user) ? "adult" : "minor"}`);
console.log(`and has${hasAddress(user) ? "" : " no"} address`);
