export class PowerSource {
    private energySupply = 100
  
    consume(energy: number): void {
      try {
        if(this.energySupply >= energy) {
          this.energySupply -= energy
        } else {
          throw new Error(`Not enough energy. Current energy supply: ${this.energySupply}. Your device requires: ${energy}`);
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
  
  class LightBulb {
    public readonly powerConsumption = 20

    constructor(private source: PowerSource) {}

    lightUp(timeInSecond: number): void {
        for (let duration = 0; duration < timeInSecond; duration++) {
            setTimeout(() => {
                this.source.consume(this.powerConsumption);
                console.log("*")
                if(duration === timeInSecond - 1) {
                    console.log("Time has ended. Light Bulb is turning off")
                }
            }, duration * 1000)
        }
     
    }
  }
  
  const source = new PowerSource();
  const LB1 = new LightBulb(source)

  LB1.lightUp(6)

  