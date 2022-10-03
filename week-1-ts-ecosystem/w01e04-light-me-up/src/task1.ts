import {PowerSource} from "./models/powerSource";
import {LightBulb} from "./models/lightBulb";

export const task1 = () => {
    try {
        const powerSource = new PowerSource();

        const lightBulb1 = new LightBulb(powerSource);
        lightBulb1.turnOn();

        const lightBulb2 = new LightBulb(powerSource);
        lightBulb2.turnOn();

        const lightBulb3 = new LightBulb(powerSource);
        lightBulb3.turnOn();

        const lightBulb4 = new LightBulb(powerSource);
        lightBulb4.turnOn();

        const lightBulb5 = new LightBulb(powerSource);
        lightBulb5.turnOn();

        const lightBulb6 = new LightBulb(powerSource);
        lightBulb6.turnOn();
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error(error);
        }
    }
};
