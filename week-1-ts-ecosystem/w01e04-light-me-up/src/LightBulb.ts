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

  lightUpFor(seconds: number, onError?: (e: Error) => void) {
    for (let sec = 0; sec < seconds; sec++) {
      setTimeout(() => {
        try {
          this.lightUp();
        } catch (e: unknown) {
          if (e instanceof Error) {
            if (onError) {
              return onError(e);
            }

            console.error("An error occurred:");
            console.log(e);
          } else {
            console.error("Unknown exception");
          }
        }
      }, 1000 * sec);
    }
  }
}
