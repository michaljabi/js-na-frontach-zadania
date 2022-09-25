export class PowerSource {
  private energySupply = 100;

  consume(energy: number) {
    if (this.energySupply < energy) {
      throw "You don't have enough energy supply";
    } else {
      console.log('consuming energy');
      this.energySupply -= energy;
    }
  }
}
