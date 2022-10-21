import PowerSource from './PowerSource';

export default class LightBulb {
  protected readonly watts = 20;
  powerSource: PowerSource;

  constructor(powerSource: PowerSource) {
    this.powerSource = powerSource;
  }

  powerOnForSeconds(seconds: number) {
    this.powerSource.consume(this.watts * seconds);
  }
}
