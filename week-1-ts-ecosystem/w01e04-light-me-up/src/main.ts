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
  #energySupply = 100;

  public consume(energy: number) {
    if (this.#energySupply >= energy) {
      this.#energySupply -= energy;
    } else {
      throw new Error("Not enough power");
    }
  }

  showPowerSupply() {
    return this.#energySupply;
  }
}

class LightBulb {
  protected readonly powerConsumption = 20;

  connect(powerSource: PowerSource) {
    powerSource.consume(this.powerConsumption);
  }
}

const powerSource = new PowerSource();

const abazurek: Record<string, LightBulb> = {};

Array.from({ length: 6 }).forEach((_, i) => {
  abazurek[`lightBulb${i + 1}`] = new LightBulb();
});

Object.entries(abazurek).forEach(([, value]) => {
  value.connect(powerSource);
  console.log(powerSource.showPowerSupply());
});

export {};
