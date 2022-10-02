import { catchError } from './error';
import { LightBulb } from './lightBulb';
import { PowerSource } from './powerSource';

const powerSource = new PowerSource();

const lightBulb1 = new LightBulb(powerSource);
const lightBulb2 = new LightBulb(powerSource);
const lightBulb3 = new LightBulb(powerSource);
const lightBulb4 = new LightBulb(powerSource);
const lightBulb5 = new LightBulb(powerSource);
const lightBulb6 = new LightBulb(powerSource);

void catchError(lightBulb1.glow());
void catchError(lightBulb2.glow());
void catchError(lightBulb3.glow());
void catchError(lightBulb4.glow());
void catchError(lightBulb5.glow());
void catchError(lightBulb6.glow());
