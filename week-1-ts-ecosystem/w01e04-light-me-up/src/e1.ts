/**
 * W zasadzie tutaj możesz modyfikować wszystko poza wartościami:
 *
 * - 100 w przypadku PowerSource.
 * - 20 w przypadku LightBulb.
 *
 * Pamiętaj `PowerSource` ma nie wiedzieć — kto z niego korzysta!
 * Dodatkowo — rzucać błąd, jeśli zapas mocy się wyczerpie.
 * */

import LightBulb from './modules/LightBulb';
import PowerSource from './modules/PowerSource';

const powerSource = new PowerSource();
const lightBulb1 = new LightBulb(powerSource);
const lightBulb2 = new LightBulb(powerSource);
const lightBulb3 = new LightBulb(powerSource);
const lightBulb4 = new LightBulb(powerSource);
const lightBulb5 = new LightBulb(powerSource);
const lightBulb6 = new LightBulb(powerSource);

lightBulb1.powerOnForSeconds(1);
lightBulb2.powerOnForSeconds(1);
lightBulb3.powerOnForSeconds(1);
lightBulb4.powerOnForSeconds(1);
lightBulb5.powerOnForSeconds(1);
lightBulb6.powerOnForSeconds(1);
