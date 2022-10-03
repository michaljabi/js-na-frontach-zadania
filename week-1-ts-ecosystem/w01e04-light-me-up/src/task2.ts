import {PowerSource} from "./models/powerSource";
import {LightBulb} from "./models/lightBulb";

export const task2 = async () => {
    try {
        const powerSource = new PowerSource();

        const lightBulb1 = new LightBulb(powerSource);
        await lightBulb1.turnOnDuring(6);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error(error);
        }
    }
};
