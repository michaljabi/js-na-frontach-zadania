import { LightBulb } from "./LightBulb";
import { PowerSource } from "./PowerSource";

const powersource = new PowerSource();
// const powersource2 = new PowerSource(); // throw err - singleton
const lightbulb1 = new LightBulb("Lightbulb1");
lightbulb1.plugIn(powersource);
const lightbulb2 = new LightBulb("Lightbulb2");
lightbulb2.plugIn(powersource);
const lightbulb3 = new LightBulb("Lightbulb3");
lightbulb3.plugIn(powersource);
const lightbulb4 = new LightBulb("Lightbulb4");
lightbulb4.plugIn(powersource);
const lightbulb5 = new LightBulb("lightbulb5");
lightbulb5.plugIn(powersource);
const lightbulb6 = new LightBulb("lightbulb6");
lightbulb6.plugIn(powersource);
