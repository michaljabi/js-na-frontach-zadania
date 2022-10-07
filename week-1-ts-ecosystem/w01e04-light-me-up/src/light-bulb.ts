import {PowerSource} from "./power-source";

export class LightBulb {
    protected readonly powerConsumption = 20
    private energyLevel = 0;
    private powerSource: PowerSource | undefined;

    get energyNeeded(){
        return this.powerConsumption - this.energyLevel;
    }

    getEnergy(energy: number){
        this.energyLevel = energy;
        console.log(`I've gained ${this.energyLevel}W`)
    }

    addPowerSource(powerSource: PowerSource){
        this.powerSource = powerSource;
    }

    async lightBulbUp() {
        try {
            if (this.powerSource) {
                const energy = this.powerSource.consume(this.energyNeeded);
                this.getEnergy(energy);
                await delay(1000);
                this.drainEnergy();
            }
        } catch (error) {
            throw error;
        }
    }

    removePowerSource(){
        this.powerSource = undefined;
    }

    private drainEnergy() {
        this.energyLevel = 0;
        console.log('energy drained');
    }
}

function delay(time: number) {
    return new Promise((resolve)=>setTimeout(resolve, time));
}
