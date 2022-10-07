import {PowerSource} from "./power-source";
import {LightBulb} from "./light-bulb";

const powerSource = new PowerSource();
const lightBulb = new LightBulb();
const numberOfSeconds = 6;

try {
    test(numberOfSeconds);
} catch (error) {
    console.error(error);
}

async function test(numberOfSeconds: number) {
    lightBulb.addPowerSource(powerSource);
    for(let i = 0; i < numberOfSeconds; i++) {
        await lightBulb.lightBulbUp();
    }
    lightBulb.removePowerSource();
}