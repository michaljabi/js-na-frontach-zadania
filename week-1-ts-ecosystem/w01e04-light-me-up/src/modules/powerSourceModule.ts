export class PowerSource {
  private energySupply: number = 100;

  consume(energy: number) {
    if (this.energySupply <= 0)
      throw new Error("Power source is depleted to zero");
    else {
        this.energySupply -= energy;
        console.log(`${this.energySupply} J left in tank`)
    }
  }
}
