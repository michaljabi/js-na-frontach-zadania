import { PowerSource } from './power-source';


class LightBulb {
  public readonly powerConsumption = 20

  constructor(private source: PowerSource) { }

  lightUp(timeInSecond: number): void {
    for (let duration = 0; duration < timeInSecond; duration++) {
      setTimeout(() => {
        this.source.consume(this.powerConsumption);
        console.log("*")
        if (duration === timeInSecond - 1) {
          console.log("Time has ended. Light Bulb is turning off")
        }
      }, duration * 1000)
    }
  }
}

const source = new PowerSource();
const LB1 = new LightBulb(source)

LB1.lightUp(6)

