export class PowerSource {
    private energySupply = 100;

    consume(energy: number) {
        if (this.energySupply < energy) {
            throw new Error("No enough power!");
        }

        this.energySupply -= energy;
    }
}
