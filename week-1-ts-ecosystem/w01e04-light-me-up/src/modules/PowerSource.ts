export default class PowerSource {
  private energySupply: number = 100;

  consume(energy: number) {
    if (this.energySupply < energy) {
      this.energySupply = 0;
      throw new Error('Energy supply run out of energy');
    }
    this.energySupply -= energy;
  }
}
