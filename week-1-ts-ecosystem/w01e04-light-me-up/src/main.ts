/**
 * W zasadzie tutaj możesz modyfikować wszystko poza wartościami:
 *
 * - 100 w przypadku PowerSource.
 * - 20 w przypadku LightBulb.
 *
 * Pamiętaj `PowerSource` ma nie wiedzieć — kto z niego korzysta!
 * Dodatkowo — rzucać błąd, jeśli zapas mocy się wyczerpie.
 * */

class PowerSource {
    private energySupply = 100

    consume(energy: number) {
        if ((this.energySupply - energy) < 0) {
            throw new Error('I\'m out of power')
        }

        this.energySupply -= energy
    }

    availableEnergy() {
        return this.energySupply;
    }
}

class LightBulb {
    protected readonly powerConsumption = 20
    powerSource: PowerSource;

    constructor(powerSource: PowerSource) {
        this.powerSource = powerSource;
    }

    consume() {
        this.powerSource.consume(this.powerConsumption);
    }

    lightOn(sec: number) {
        for (let s = 0; s < sec; s++) {
            setTimeout(() => {
                this.consume();
                console.log('Light on');
            }, 1000);
        }
    }
}

/* Task 1 */

const powerSource = new PowerSource();
let secondsOn = 0;
const interval = setInterval(() => {
    try {
        new LightBulb(powerSource).consume();
        new LightBulb(powerSource).consume();
        secondsOn++;
    } catch (e) {
        clearInterval(interval);
        console.log(`Żarówki świeciły ${secondsOn} sek.`);
    }
}, 1000);


/* Task 2 */
const powerSource2 = new PowerSource();
new LightBulb(powerSource2).lightOn(6);
