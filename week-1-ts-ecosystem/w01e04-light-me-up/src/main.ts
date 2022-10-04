/**
 * W zasadzie tutaj możesz modyfikować wszystko poza wartościami:
 *
 * - 100 w przypadku PowerSource.
 * - 20 w przypadku LightBulb.
 *
 * Pamiętaj `PowerSource` ma nie wiedzieć — kto z niego korzysta!
 * Dodatkowo — rzucać błąd, jeśli zapas mocy się wyczerpie.
 * */

import { LightBulb } from "./modules/lightBulb.module";
import { PowerSource } from "./modules/powerSourceModule";

const powerSource = new PowerSource();
const lightBulb1 = new LightBulb(powerSource);



(async () => {
  try {
    console.log("Excercise 1");
    const lightBulb1 = new LightBulb(powerSource);
    const lightBulb2 = new LightBulb(powerSource);
    const lightBulb3 = new LightBulb(powerSource);
    const lightBulb4 = new LightBulb(powerSource);
    const lightBulb5 = new LightBulb(powerSource);
    const lightBulb6 = new LightBulb(powerSource);
   await lightBulb1.light();
   await  lightBulb2.light();
   await lightBulb3.light();
   await lightBulb4.light();
   await lightBulb5.light();
   await lightBulb6.light();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Unknown error", error);
    }
  }
})();

(async () => {
  console.log("Excercise 2");
  const powerSource = new PowerSource();
  const lightBulb1 = new LightBulb(powerSource);

  try {
    await lightBulb1.light(6);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Unknown error", error);
    }
  }
})();
