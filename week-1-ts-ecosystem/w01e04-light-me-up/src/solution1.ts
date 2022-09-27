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

    consume(energy:number) {
        this.notEnoughEnergyException()
        this.energySupply -= energy
    }

    notEnoughEnergyException(){
        if(this.energySupply === 0){
            throw new Error('There is not enough energy to light your device.')
        }
    }
}

class LightBulb {
    protected readonly powerConsumption = 20
    constructor(powerSource: PowerSource) {}

    light(){
        powerSource.consume(this.powerConsumption)
    }
}

const powerSource = new PowerSource()
const lightBulb1 = new LightBulb(powerSource)
const lightBulb2 = new LightBulb(powerSource)
const lightBulb3 = new LightBulb(powerSource)
const lightBulb4 = new LightBulb(powerSource)
const lightBulb5 = new LightBulb(powerSource)
const lightBulb6 = new LightBulb(powerSource)


lightBulb1.light()
lightBulb2.light()
lightBulb3.light()
lightBulb4.light()
lightBulb5.light()
lightBulb6.light()


