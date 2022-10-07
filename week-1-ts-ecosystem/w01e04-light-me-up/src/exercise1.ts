import { LightBulb } from './models/LightBulb';
import { PowerSource } from './models/PowerSource';

const battery = new PowerSource();
const bulb1 = new LightBulb(battery);
const bulb2 = new LightBulb(battery);
const bulb3 = new LightBulb(battery);
const bulb4 = new LightBulb(battery);
const bulb5 = new LightBulb(battery);

bulb1.flash();
bulb2.flash();
bulb3.flash();
bulb4.flash();
bulb5.flash();

try {
  const bulb6 = new LightBulb(battery);
  bulb6.flash();
} catch (error: any) {
  console.log(`Error: ${error.message}`);
}
