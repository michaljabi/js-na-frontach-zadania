export class PowerSource {
  private energySupply = 100;

  consume(energy) {
    if (this.energySupply >= energy) {
      this.energySupply -= energy;
    } else {
      throw new Error("Run out of energy");
    }
  }
}
