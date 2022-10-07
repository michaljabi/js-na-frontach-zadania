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

function delay(time: number) {
    return new Promise((resolve)=>setTimeout(resolve, time));
}

async function test(numberOfSeconds: number) {
    lightBulb.addPowerSource(numberOfSeconds,powerSource);
    for(let i = 0; i < numberOfSeconds; i++) {
        lightBulb.gainEnergy();
        await delay(1000);
        lightBulb.drainEnergy();
    }
}