/**
 * W zasadzie tutaj możesz modyfikować wszystko poza wartościami:
 *
 * - 100 w przypadku PowerSource.
 * - 20 w przypadku LightBulb.
 *
 * Pamiętaj `PowerSource` ma nie wiedzieć — kto z niego korzysta!
 * Dodatkowo — rzucać błąd, jeśli zapas mocy się wyczerpie.
 * */

class PowerSource {
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
}

const source = new PowerSource();

const LB1 = new LightBulb()
const LB2 = new LightBulb()
const LB3 = new LightBulb()
const LB4 = new LightBulb()
const LB5 = new LightBulb()
const LB6 = new LightBulb()

source.consume(LB1.powerConsumption);
source.consume(LB2.powerConsumption);
source.consume(LB3.powerConsumption);
source.consume(LB4.powerConsumption);
source.consume(LB5.powerConsumption);
source.consume(LB6.powerConsumption);

console.log(source);