export class PowerSource {
  private energySupply = 100;

  consume(energy: number) {
    this.energySupply -= energy;
    if (this.energySupply < 0) {
      this.energySupply = 0;
      throw new Error('Not enough energy');
    }
  }

  resetGenerator() {
    this.energySupply = 100;
    console.log('GENERATOR RESTARTED');
  }
}
