export interface Consumable {
    consume: (energy: number) => void
}

export class PowerSource implements Consumable{
    private energySupply = 100

    consume (energy: number) {
        if (this.energySupply - energy < 0) {
            throw new Error('I\'m out of power')
        }
        this.energySupply -= energy
    }
}