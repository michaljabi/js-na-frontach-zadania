import { PowerSource } from "./PowerSource";

export class LightBulb {
  name: string;
  protected readonly powerConsumption = 20;

  constructor(name: string) {
    this.name = name;
  }

  plugIn(powerSource: PowerSource) {
    powerSource.consume(this.powerConsumption);
    console.log(`Lightbulb: ${this.name} consumes ${this.powerConsumption} W.`);
  }
}
