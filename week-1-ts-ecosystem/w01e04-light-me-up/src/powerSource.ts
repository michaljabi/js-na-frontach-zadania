export class PowerSource {
  private energySupply = 100;

  consume(energy: number) {
    this.checkEnergy();
    this.energySupply -= energy;
  }

  checkEnergy() {
    if (this.energySupply <= 0) {
      throw new Error('No energy left!');
    }
  }
}
