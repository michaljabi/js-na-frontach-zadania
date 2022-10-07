import {PowerSource} from "./power-source";

export class LightBulb {
    protected readonly powerConsumption = 20
    private energyLevel = 0;
    private powerSource: PowerSource | undefined;
    private numberOfSeconds = 0;

    get energyNeeded(){
        return this.powerConsumption - this.energyLevel;
    }

    getEnergy(energy: number){
        this.energyLevel = energy;
        console.log(`I've gained ${this.energyLevel}W`)
    }

    addPowerSource(numberOfSeconds: number, powerSource: PowerSource){
        this.numberOfSeconds = numberOfSeconds;
        this.powerSource = powerSource;
    }

    gainEnergy() {
        try {
            if (this.powerSource && this.numberOfSeconds > 0) {
                const energy = this.powerSource.consume(this.energyNeeded);
                this.getEnergy(energy);
                this.numberOfSeconds--;
            }

            if (this.numberOfSeconds === 0) {
                this.powerSource = undefined;
            }
        } catch (error) {
            throw error;
        }
    }

    drainEnergy() {
        this.energyLevel = 0;
        console.log('energy drained');
    }
}