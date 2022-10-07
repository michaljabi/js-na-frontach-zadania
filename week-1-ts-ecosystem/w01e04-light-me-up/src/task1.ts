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
