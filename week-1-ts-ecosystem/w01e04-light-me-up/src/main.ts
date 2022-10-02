import { PowerSource } from './powerSource';
import { LightBulb } from './lightBulb';

const powerSource = new PowerSource();

const first = () => {
  console.log('-----------');
  console.log('FIRST TASK');

  const bulb1 = new LightBulb(powerSource);
  const bulb2 = new LightBulb(powerSource);
  const bulb3 = new LightBulb(powerSource);
  const bulb4 = new LightBulb(powerSource);
  const bulb5 = new LightBulb(powerSource);
  const bulb6 = new LightBulb(powerSource);

  try {
    bulb1.lumos();
    bulb2.lumos();
    bulb3.lumos();
    bulb4.lumos();
    bulb5.lumos();
    bulb6.lumos();
  } catch (error) {
    powerSource.resetGenerator();
    console.error(error);
  }
  console.log('powerSource', powerSource);
};

const second = () => {
  console.log('-----------');
  console.log('SECOND TASK');

  const bulb1 = new LightBulb(powerSource);
  try {
    bulb1.switchForFewSeconds(7);
  } catch (error) {
    powerSource.resetGenerator();
    console.error(error);
  }
  console.log('powerSource', powerSource);
};

first();
second();
