import { LightBulb } from './models/LightBulb';
import { PowerSource } from './models/PowerSource';

const battery = new PowerSource();
const bulb1 = new LightBulb(battery);

try {
  await bulb1.switchOn(6);
} catch (error: any) {
  console.log(`Error: ${error.message}`);
}
