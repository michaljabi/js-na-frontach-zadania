import { PowerSource } from "./powerSource";

export class LightBulb {
    protected readonly powerConsumption = 20;

    constructor(private powerSource: PowerSource) {
    }

    turnOn() {
        try {
            this.powerSource.consume(this.powerConsumption);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error(error);
            }
        }
    }

    async turnOnDuring(seconds: number) {
        for (let second = 0; second < seconds; second++) {
            await new Promise<void>(async (resolve, reject) => {
                setTimeout(() => {
                    try {
                        this.turnOn();
                        resolve();
                    } catch (error) {
                        reject(error);
                    }
                }, 1000);
            });
        }
    }
}
