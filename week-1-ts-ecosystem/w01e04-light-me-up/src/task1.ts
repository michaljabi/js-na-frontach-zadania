import {PowerSource} from './models/powerSource';
import {LightBulb} from './models/lightBulb';

export default function task1() {
  console.log("-- TASK 1 --");
  const powerSource = new PowerSource();
  console.log(`Starting with power: ${powerSource.getEnergyLeft()}`);
  try {
    for (let i = 1; i <= 5; i++) {
      new LightBulb(powerSource).consume();
      console.log(`${i} light bulb, energy left: ${powerSource.getEnergyLeft()}`);
    }
    new LightBulb(powerSource).consume();
  } catch (e: any) {
    console.log(e.message);
  }
}