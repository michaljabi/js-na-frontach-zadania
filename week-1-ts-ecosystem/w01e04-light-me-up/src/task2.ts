import { LightBulb } from "./modules/lightBulb.module";
import { PowerSource } from "./modules/powerSourceModule";


const powerSource = new PowerSource();


const lightBulb1 = new LightBulb(powerSource);
lightBulb1.light(6)
