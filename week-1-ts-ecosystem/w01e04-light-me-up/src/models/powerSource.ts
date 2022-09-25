export class PowerSource {
  private energySupply = 100

  getEnergyLeft() {
    return this.energySupply;
  }

  consume(energy: number) {
    if(this.energySupply - energy < 0) throw new Error("Not enough energy");
    this.energySupply -= energy
  }
}