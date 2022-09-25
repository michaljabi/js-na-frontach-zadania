/**
 * W zasadzie tutaj możesz modyfikować wszystko poza wartościami:
 *
 * - 100 w przypadku PowerSource.
 * - 20 w przypadku LightBulb.
 *
 * Pamiętaj `PowerSource` ma nie wiedzieć — kto z niego korzysta!
 * Dodatkowo — rzucać błąd, jeśli zapas mocy się wyczerpie.
 * */

import { LightBulb } from "./light";
import { PowerSource } from "./power-source";

const powerSource = new PowerSource();

const light1 = new LightBulb(powerSource);
const light2 = new LightBulb(powerSource);
const light3 = new LightBulb(powerSource);
const light4 = new LightBulb(powerSource);
const light5 = new LightBulb(powerSource);
const light = new LightBulb(powerSource);

// light1.light();
// light2.light();
// light3.light();
// light4.light();
// light5.light();

light.lightWithTimer(5);
