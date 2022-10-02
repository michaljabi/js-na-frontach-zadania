import { PowerSource } from './powerSource';

export class LightBulb {
  protected readonly powerConsumption = 20;
  powerSource: PowerSource;

  constructor(powerSource: PowerSource) {
    this.powerSource = powerSource;
  }

  lumos() {
    this.powerSource.consume(this.powerConsumption);
  }

  switchForFewSeconds(seconds: number) {
    for (let i = 1; seconds >= i; i++) {
      this.lumos();
      console.log(`I light for ${i} seconds now.`);
    }
  }
}
