import { PowerSource } from './PowerSource';
import { LightBulb } from './LightBulb';
import { ErrorHandler } from './ErrorHandler';

// Zadanie 2

const powerSource = new PowerSource();
const errorHandler = new ErrorHandler();
const lightBulb = new LightBulb(powerSource, errorHandler);

lightBulb.lightGivenSeconds(6);
