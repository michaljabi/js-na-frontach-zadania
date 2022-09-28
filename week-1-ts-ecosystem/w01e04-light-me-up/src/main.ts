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
const lightBulb2 = new LightBulb(powerSource)
const lightBulb3 = new LightBulb(powerSource)
const lightBulb4 = new LightBulb(powerSource)
const lightBulb5 = new LightBulb(powerSource)
const lightBulb6 = new LightBulb(powerSource)


lightBulb1.light()
lightBulb2.light()
lightBulb3.light()
lightBulb4.light()
lightBulb5.light()
lightBulb6.light()


