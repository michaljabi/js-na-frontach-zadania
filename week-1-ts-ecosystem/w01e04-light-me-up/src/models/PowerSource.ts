const DEFAULT_POWER_SUPPLY = 100;

class PowerSource {
  #energySupply = DEFAULT_POWER_SUPPLY;

  public consume(energy: number): void {
    if (this.#energySupply - energy < 0) {
      throw Error('Source is out of power!');
    }

    this.#energySupply -= energy;
  }

  public getEnergySupply(): number {
    return this.#energySupply;
  }
}

export { PowerSource };
