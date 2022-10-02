export class PowerSource {
  private energySupply = 100;

  consume(energy: number) {
    if (this.energySupply < energy) {
      throw new Error("Run out of energy");
    }

    this.energySupply -= energy;
  }
}
