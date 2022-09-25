import { PowerSource } from './PowerSource';
import { ErrorHandler } from './ErrorHandler';
import { SECOND_IN_MILLIS } from './Constants';

export class LightBulb {
  protected readonly powerConsumption = 20;

  constructor(private powerSource: PowerSource, private ErrorHandler: ErrorHandler) {}

  light() {
    console.log('light request');
    try {
      this.powerSource.consume(this.powerConsumption);
    } catch (e) {
      console.error(e);
      if (typeof e === 'string') {
        this.ErrorHandler.print(e);
      }
    }
  }

  lightGivenSeconds(seconds: number) {
    let secondsOfLightning = 0;
    const lightning = setInterval(() => {
      if (secondsOfLightning < seconds) {
        this.light();
      } else {
        clearInterval(lightning);
      }
      secondsOfLightning++;
    }, SECOND_IN_MILLIS);
  }
}
