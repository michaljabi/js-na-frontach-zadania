import { PowerSource } from "./PowerSupply";

export class LightBulb {
  protected readonly powerConsumption = 20;

  connect(powerSource: PowerSource) {
    powerSource.consume(this.powerConsumption);
  }
}
