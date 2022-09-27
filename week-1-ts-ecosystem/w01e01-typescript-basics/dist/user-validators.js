"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasAddress = exports.hasGivenAge = void 0;
function hasGivenAge(requiredAge) {
    return (user) => user.age >= requiredAge;
}
exports.hasGivenAge = hasGivenAge;
function hasAddress(user) {
    return Boolean(user.address);
}
exports.hasAddress = hasAddress;
