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

    light() {
        powerSource.consume(this.powerConsumption);
    }

    delay(){
        return new Promise((res,rej)=>{
            try {
                setTimeout(()=>{
                    res(this.light())
                },1000)
            } catch (e) {
                rej(e)
            }
        })
    }

    async lightNSec(n:number){
        for(let sec = 0; sec < n; sec++){
            console.log(sec)
            await this.delay()
        }
    }
}

const powerSource = new PowerSource()
const lightBulb1 = new LightBulb(powerSource)


lightBulb1.lightNSec(6).catch(e=>console.log(e))

