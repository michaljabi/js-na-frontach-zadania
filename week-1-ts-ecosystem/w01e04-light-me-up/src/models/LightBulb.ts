import { PowerSource } from './PowerSource';

const DEFAULT_POWER_CONSUMPTION = 20;
const INTERVAL_DURATION = 1000;

class LightBulb {
  #powerConsumption = DEFAULT_POWER_CONSUMPTION;
  #powerSource: PowerSource;

  public constructor(powerSource: PowerSource) {
    this.#powerSource = powerSource;
  }

  public flash(): void {
    this.#powerSource.consume(this.#powerConsumption);
  }

  public switchOn(numberOfSeconds: number): Promise<void> {
    console.log('Light bulb switched on');

    return new Promise((resolve, reject) => {
      let currentSecond = 1;

      const intervalID: NodeJS.Timer = setInterval(() => {
        console.log(`Second: ${currentSecond}`);

        try {
          this.flash();

          if (currentSecond >= numberOfSeconds) {
            clearInterval(intervalID);

            return resolve();
          }

          currentSecond++;
        } catch (error: any) {
          clearInterval(intervalID);

          return reject(error);
        }
      }, INTERVAL_DURATION);
    });
  }
}

export { LightBulb };
