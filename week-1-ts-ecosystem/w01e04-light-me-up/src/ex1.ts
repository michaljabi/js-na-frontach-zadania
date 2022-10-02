/**
 * W zasadzie tutaj możesz modyfikować wszystko poza wartościami:
 *
 * - 100 w przypadku PowerSource.
 * - 20 w przypadku LightBulb.
 *
 * Pamiętaj `PowerSource` ma nie wiedzieć — kto z niego korzysta!
 * Dodatkowo — rzucać błąd, jeśli zapas mocy się wyczerpie.
 * */
import { PowerSource } from "./PowerSource";
import { LightBulb } from "./LightBulb";

const powerSource = new PowerSource();

const lightBulb1 = new LightBulb(powerSource);
const lightBulb2 = new LightBulb(powerSource);
const lightBulb3 = new LightBulb(powerSource);
const lightBulb4 = new LightBulb(powerSource);
const lightBulb5 = new LightBulb(powerSource);
const lightBulb6 = new LightBulb(powerSource);

try {
  lightBulb1.lightUp();
  lightBulb2.lightUp();
  lightBulb3.lightUp();
  lightBulb4.lightUp();
  lightBulb5.lightUp();
  lightBulb6.lightUp();
} catch (e) {
  console.error("An error occurred:");
  console.log(e);
}
