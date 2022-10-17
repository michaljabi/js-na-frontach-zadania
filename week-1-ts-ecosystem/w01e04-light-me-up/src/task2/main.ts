import { LightBulb } from "./LightBulb";
import { PowerSource } from "./PowerSource";

const powersource = new PowerSource();
// const powersource2 = new PowerSource(); // throw err - singleton
const lightbulb1 = new LightBulb("Lightbulb1");
lightbulb1.plugIn(powersource, 6);
