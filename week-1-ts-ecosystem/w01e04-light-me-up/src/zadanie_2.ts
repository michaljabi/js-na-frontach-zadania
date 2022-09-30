import { LightBulb } from "./LightBulb";
import { PowerSource } from "./PowerSupply";

console.log("----- ZADANIE 2 -----");

class LightBulbWithTimeSwitch extends LightBulb {
  // connect light bulb to power source for n seconds
  connectForSeconds(powerSource: PowerSource, seconds: number) {
    const interval = setInterval(() => {
      powerSource.consume(this.powerConsumption);
      console.log(powerSource.showPowerSupply());
    }, 1000);

    setTimeout(() => clearInterval(interval), seconds * 1000);
  }
}

const powerSource = new PowerSource();
const lightBulb = new LightBulbWithTimeSwitch();

lightBulb.connectForSeconds(powerSource, 6);

export {};
