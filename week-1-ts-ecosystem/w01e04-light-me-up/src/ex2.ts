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

lightBulb1.lightUpFor(6);
