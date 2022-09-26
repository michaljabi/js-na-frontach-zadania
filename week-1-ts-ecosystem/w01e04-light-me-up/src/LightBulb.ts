import { PowerSource } from "./PowerSource";

export class LightBulb {
  protected readonly powerConsumption = 20;
  public powerSource: PowerSource;

  constructor(powerSource: PowerSource) {
    this.powerSource = powerSource;
  }

  lightUp() {
    this.powerSource.consume(this.powerConsumption);
    console.log("Lighting...");
  }

  lightUpFor(seconds) {
    for (let sec = 0; sec < seconds; sec++) {
      setTimeout(() => {
        this.lightUp();
      }, 1000 * sec);
    }
  }
}
