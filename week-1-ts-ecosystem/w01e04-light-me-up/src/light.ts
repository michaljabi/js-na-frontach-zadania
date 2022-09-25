import { PowerSource } from "./power-source";

export class LightBulb {
  protected readonly powerConsumption = 20;
  constructor(private powerSource: PowerSource) {}

  light() {
    this.powerSource.consume(this.powerConsumption);
  }

  lightWithTimer(n: number) {
    this.light();
    if (n > 1) this.lightWithTimer(n - 1);
  }
}
