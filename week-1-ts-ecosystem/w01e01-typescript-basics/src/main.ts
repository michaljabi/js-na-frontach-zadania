import { user } from "./data";
import { hasAddress, isAdult } from "./utils";

/**
 * Zasady co do pliku:
 *
 * Możesz dowolnie modyfikować zawartość tego pliku,
 * całość programu musi jednak działać tak jak do tej pory !
 *
 * */

hasAddress(user);

console.log(`User ${user.name} is ${isAdult(user) ? "adult" : "minor"}`);
console.log(`and has${hasAddress(user) ? "" : " no"} address`);
