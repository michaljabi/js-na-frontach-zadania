"use strict";
/**
 * Zasady co do pliku:
 *
 * Możesz dowolnie modyfikować zawartość tego pliku,
 * całość programu musi jednak działać tak jak do tej pory !
 *
 * */
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("./user-model");
const user_validators_1 = require("./user-validators");
const isAdult = (0, user_validators_1.hasGivenAge)(18);
console.log(`User ${user_model_1.user.name} is ${isAdult(user_model_1.user) ? "adult" : "minor"}`);
console.log(`and has${(0, user_validators_1.hasAddress)(user_model_1.user) ? "" : " no"} address`);
