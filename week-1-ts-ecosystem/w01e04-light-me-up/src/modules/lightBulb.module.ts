import { PowerSource } from "./powerSourceModule";
const timer = () => new Promise((res) => setTimeout(res, 1000));

export class LightBulb {
  protected readonly powerConsumption = 20;
  powerSource: PowerSource;

  constructor(powerSource: PowerSource) {
    this.powerSource = powerSource;
  }
  async light(time: number = 1) {
    if (time) {
      for (let i = 0; i < time; i++) {
        console.log("Took 20 Watts to light for 1 second");
        try{
            
            this.powerSource.consume(this.powerConsumption);
            await timer()
        }catch {
            console.warn("ERROR: Failed to light, not enough power  in energy source")
        }
      }
    }
  }
}
