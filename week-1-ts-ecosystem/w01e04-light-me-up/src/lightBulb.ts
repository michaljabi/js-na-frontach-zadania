import { PowerSource } from './powerSource';
import { logger } from './logger';

export class LightBulb {
  protected readonly powerConsumption = 20;
  protected powerSource: PowerSource;

  constructor(powerSource: PowerSource) {
    this.powerSource = powerSource;
  }

  async glow(sec: number = 1) {
    for (let i = 0; i < sec; i++) {
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          try {
            this.powerSource.consume(this.powerConsumption);
            logger.info('Light bulb is glowing!', `${i + 1}s`);
            resolve();
          } catch (e) {
            reject(e);
          }
        }, 1000);
      });
    }
  }
}
