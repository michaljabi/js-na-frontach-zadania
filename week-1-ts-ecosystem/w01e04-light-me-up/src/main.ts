import { LightBulb } from './LightBulb.js'
import { PowerSource } from './PowerSource.js'

const powerSource1 = new PowerSource()

console.log('Task 1')

console.log('Light bulb 1')
new LightBulb().consumeOnce(powerSource1)
console.log('Light bulb 2')
new LightBulb().consumeOnce(powerSource1)
console.log('Light bulb 3')
new LightBulb().consumeOnce(powerSource1)
console.log('Light bulb 4')
new LightBulb().consumeOnce(powerSource1)
console.log('Light bulb 5')
new LightBulb().consumeOnce(powerSource1)
console.log('Light bulb 6')
new LightBulb().consumeOnce(powerSource1)

console.log('Task 2')

const powerSource2 = new PowerSource()
console.log('Start consuming')
new LightBulb().consumeTillFailure(powerSource2)
