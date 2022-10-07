export class PowerSource {
    private energySupply = 100

    consume(energy: number): number {
        if(this.energySupply - energy < 0){
            throw new NoEnoughEnergyError();
        } else {
            this.energySupply -= energy;
            return energy;
        }
    }
}

class NoEnoughEnergyError extends Error {
    constructor() {
        super(`Not enough power`);
    }
}