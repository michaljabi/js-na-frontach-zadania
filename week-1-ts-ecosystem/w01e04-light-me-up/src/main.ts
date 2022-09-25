import { PowerSource } from './PowerSource';
import { LightBulb } from './LightBulb';
import { ErrorHandler } from './ErrorHandler';

/**
 * W zasadzie tutaj możesz modyfikować wszystko poza wartościami:
 *
 * - 100 w przypadku PowerSource.
 * - 20 w przypadku LightBulb.
 *
 * Pamiętaj `PowerSource` ma nie wiedzieć — kto z niego korzysta!
 * Dodatkowo — rzucać błąd, jeśli zapas mocy się wyczerpie.
 * */

// ZADANIE 1

const powerSource = new PowerSource();
const errorHandler = new ErrorHandler();
const lightBulb1 = new LightBulb(powerSource, errorHandler);
const lightBulb2 = new LightBulb(powerSource, errorHandler);
const lightBulb3 = new LightBulb(powerSource, errorHandler);
const lightBulb4 = new LightBulb(powerSource, errorHandler);
const lightBulb5 = new LightBulb(powerSource, errorHandler);
const lightBulb6 = new LightBulb(powerSource, errorHandler);

lightBulb1.light();
lightBulb2.light();
lightBulb3.light();
lightBulb4.light();
lightBulb5.light();
lightBulb6.light(); //poleci exception
