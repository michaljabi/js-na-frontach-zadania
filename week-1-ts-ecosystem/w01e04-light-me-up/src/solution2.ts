import { error } from './error';
import { logger } from './logger';
import { PowerSource } from './powerSource';
import { LightBulb } from './lightBulb';

const powerSource = new PowerSource();
const lightBulb1 = new LightBulb(powerSource);

void (async () => {
  try {
    await lightBulb1.glow(6);
  } catch (e) {
    logger.error(error(e));
  }
})();
