/**
 * W zasadzie tutaj możesz modyfikować wszystko poza wartościami:
 *
 * - 100 w przypadku PowerSource.
 * - 20 w przypadku LightBulb.
 *
 * Pamiętaj `PowerSource` ma nie wiedzieć — kto z niego korzysta!
 * Dodatkowo — rzucać błąd, jeśli zapas mocy się wyczerpie.
 * */

import { LightBulb } from "./LightBulb";
import { PowerSource } from "./PowerSupply";

const powerSource = new PowerSource();

const abazurek: Record<string, LightBulb> = {};

console.log("----- ZADANIE 1 -----");

Array.from({ length: 6 }).forEach((_, i) => {
  abazurek[`lightBulb${i + 1}`] = new LightBulb();
});

Object.entries(abazurek).forEach(([, value]) => {
  value.connect(powerSource);
  console.log(powerSource.showPowerSupply());
});

export {};
