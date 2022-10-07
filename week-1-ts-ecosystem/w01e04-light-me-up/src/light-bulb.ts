import {PowerSource} from "./power-source";

export class LightBulb {
    protected readonly powerConsumption = 20
    private powerSource: PowerSource | undefined;

    get energyNeeded(){
        return this.powerConsumption;
    }

    getEnergy(energy: number){
        console.log(`I've gained ${energy}W`)
    }

    addPowerSource(powerSource: PowerSource){
        this.powerSource = powerSource;
    }

    async lightBulbUp() {
        try {
            if (this.powerSource) {
                const energy = this.powerSource.consume(this.powerConsumption);
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
        console.log('energy drained');
    }
}

function delay(time: number) {
    return new Promise((resolve)=>setTimeout(resolve, time));
}
