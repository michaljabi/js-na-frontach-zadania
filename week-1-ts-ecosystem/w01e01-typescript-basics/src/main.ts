/**
 * Zasady co do pliku:
 *
 * Możesz dowolnie modyfikować zawartość tego pliku,
 * całość programu musi jednak działać tak jak do tej pory !
 *
 * */

import {userData} from './data/User.data';
import {hasAddress} from './validator/hasAddress';
import {isAdult} from './validator/isAdult';

console.log(`User ${userData.name} is ${isAdult(userData) ? 'adult' : 'minor'}`)
console.log(`and has${hasAddress(userData) ? '' : ' no'} address`)
