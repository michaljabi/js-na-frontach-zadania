/**
 * W zasadzie tutaj możesz modyfikować wszystko poza wartościami:
 *
 * - 100 w przypadku PowerSource.
 * - 20 w przypadku LightBulb.
 *
 * Pamiętaj `PowerSource` ma nie wiedzieć — kto z niego korzysta!
 * Dodatkowo — rzucać błąd, jeśli zapas mocy się wyczerpie.
 * */
import {PowerSource} from "./power-source";
import {LightBulb} from "./light-bulb";

const powerSource1 = new PowerSource();
const lightBulb1 = new LightBulb();
const lightBulb2 = new LightBulb();
const lightBulb3 = new LightBulb();
const lightBulb4 = new LightBulb();
const lightBulb5 = new LightBulb();
const lightBulb6 = new LightBulb();
const lightBulbs = [lightBulb1,lightBulb2, lightBulb3, lightBulb4, lightBulb5, lightBulb6];

try {
    lightBulbs.forEach((lightBulb) => {
        const energy = powerSource1.consume(lightBulb.energyNeeded);
        lightBulb.getEnergy(energy)
    })
} catch (error) {
    console.error(error);
}
