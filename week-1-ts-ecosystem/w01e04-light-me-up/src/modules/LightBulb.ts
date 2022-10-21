import PowerSource from './PowerSource';

export default class LightBulb {
  protected readonly watts = 20;
  powerSource: PowerSource;

  constructor(powerSource: PowerSource) {
    this.powerSource = powerSource;
  }

  powerOnForSeconds(seconds: number) {
    const timeInterval = 0.001;
    console.log('light on');
    const interval = setInterval(() => {
      if (seconds <= 0) {
        console.log('light off');
        clearInterval(interval);
        return;
      }
      this.powerSource.consume(this.watts * timeInterval);
      seconds -= timeInterval;
    }, 1000 * timeInterval);
  }
}
