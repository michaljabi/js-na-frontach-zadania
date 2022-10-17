import { PowerSource } from "./PowerSource";

export class LightBulb {
  name: string;
  protected readonly powerConsumption = 20;

  constructor(name: string) {
    this.name = name;
  }

  plugIn(powerSource: PowerSource, numberOfSeconds: number) {
    if (numberOfSeconds < 1) {
      throw new Error("Lightbulb needs to light at least 1 second.");
    }
    let counter = 0;
    const lightUp = setInterval(() => {
      if (numberOfSeconds === ++counter) {
        clearInterval(lightUp);
      }
      try {
        powerSource.consume(this.powerConsumption);
        console.log(
          `Lightbulb: ${this.name} consumes ${this.powerConsumption} W in a second.`
        );
      } catch (e) {
        throw e;
      }
    }, 1000);
  }
}
