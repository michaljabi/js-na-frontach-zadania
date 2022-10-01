export class PowerSource {
  private energySupply = 100;

  consume(energy: number) {
    if (this.energySupply < energy) {
      throw new Error("You don't have enough energy supply");
    } else {
      this.energySupply -= energy;
    }
  }
}
