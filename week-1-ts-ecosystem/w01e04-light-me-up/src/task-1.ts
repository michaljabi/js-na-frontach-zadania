/**
 * W zasadzie tutaj możesz modyfikować wszystko poza wartościami:
 *
 * - 100 w przypadku PowerSource.
 * - 20 w przypadku LightBulb.
 *
 * Pamiętaj `PowerSource` ma nie wiedzieć — kto z niego korzysta!
 * Dodatkowo — rzucać błąd, jeśli zapas mocy się wyczerpie.
 * */

import { PowerSource } from './power-source';

class LightBulb {
  public readonly powerConsumption = 20;

  constructor(private source: PowerSource) {
    this.lightUp();
  }
  private lightUp(): void {
    try {
      this.source.consume(this.powerConsumption);
    } catch (error) {
      console.error(error)
    }
  }
}

const source = new PowerSource();

new LightBulb(source)
new LightBulb(source)
new LightBulb(source)
new LightBulb(source)
new LightBulb(source)
new LightBulb(source)

console.log(source);