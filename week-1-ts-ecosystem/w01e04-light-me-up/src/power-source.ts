export class PowerSource {
  private energySupply = 100;

  consume(energy: number) {
    if (this.energySupply === 0) {
      throw Error("Energy supply is over");
    } else {
      this.energySupply -= energy;
    }
  }
}
