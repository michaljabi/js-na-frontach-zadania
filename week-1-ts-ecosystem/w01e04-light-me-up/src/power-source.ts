export class PowerSource {
    private energySupply = 100
  
    consume(energy: number): void {
      if(this.energySupply >= energy) {
          this.energySupply -= energy
        } else {
          throw new Error(`Not enough energy. Current energy supply: ${this.energySupply}. Your device requires: ${energy}`);
       }
    }
  }