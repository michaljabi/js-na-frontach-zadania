import { PowerSource } from "./powerSourceModule";

export class LightBulb {
  protected readonly powerConsumption = 20;
  powerSource: PowerSource;

  constructor(powerSource: PowerSource) {
    this.powerSource = powerSource;
  }
  async light(time: number = 1) {
    if (time) {
      for (let i = 0; i < time; i++) {
        await new Promise<void>(async (resolve, reject) => {
          console.log("Took 20 Watts to light for 1 second");
           setTimeout(() => {
            try {
              this.powerSource.consume(this.powerConsumption);
              resolve()
            } catch(error) {
              console.error(
                "ERROR: Failed to light, not enough power in energy source"
              );
              reject(error);
            }
          },1000);
        });
      }
    }
  }
}
