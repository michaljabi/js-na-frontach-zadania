import {PowerSource} from './models/powerSource';
import {LightBulb} from './models/lightBulb';

export default function task2() {
  console.log("-- TASK 2 --");
  const powerSource = new PowerSource();
  const lightBulb = new LightBulb(powerSource);
  lightBulb.light(6);
}
