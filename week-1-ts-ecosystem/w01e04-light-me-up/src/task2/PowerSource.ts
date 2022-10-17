export class PowerSource {
  private static instance: PowerSource;
  private energySupply = 100;

  constructor() {
    if (PowerSource.instance) {
      throw new Error("You can only create one instance!");
    }
    PowerSource.instance = this;
  }

  public static getInstance(): PowerSource {
    if (!PowerSource.instance) {
      PowerSource.instance = new PowerSource();
    }

    return PowerSource.instance;
  }

  consume(energy: number) {
    if (energy > this.energySupply) {
      throw new Error("Power source has been exhausted");
    }
    this.energySupply -= energy;
    console.log(`Powersource: ${this.energySupply} J remaining.`);
  }
}
