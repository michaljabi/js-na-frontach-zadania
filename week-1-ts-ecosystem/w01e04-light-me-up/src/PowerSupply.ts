export class PowerSource {
  #energySupply = 100;

  public consume(energy: number) {
    if (this.#energySupply > energy) {
      this.#energySupply -= energy;
    } else {
      throw new Error("Not enough power");
    }
  }

  showPowerSupply() {
    return this.#energySupply;
  }
}
