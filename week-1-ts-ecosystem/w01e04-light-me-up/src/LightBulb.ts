import { Consumable } from './PowerSource.js'

export class LightBulb {
    protected readonly powerConsumption = 20

    consumeOnce (powerSource: Consumable) {
        try {
            powerSource.consume(this.powerConsumption)
        } catch (err) {
            if (err instanceof Error) {
                console.error(err.message)
            }
        }
    }

    consumeTillFailure (powerSource: Consumable) {
        let seconds = 1
        const interval = setInterval(() => {
            try {
                powerSource.consume(this.powerConsumption)
                console.log(`Glowing for ${seconds++} seconds`)
            } catch (err) {
                clearInterval(interval)
                if (err instanceof Error) {
                    console.error(err.message)
                }
            }
        }, 1000)
    }
}