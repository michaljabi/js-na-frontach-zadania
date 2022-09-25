import {PowerSource} from './powerSource';

const ONE_SECOND_IN_MS = 1000;

export class LightBulb {
  protected readonly powerConsumption = 20
  #powerSource: PowerSource;

  constructor(powerSource: PowerSource) {
    this.#powerSource = powerSource;
  }

  consume() {
    this.#powerSource.consume(this.powerConsumption);
  }

  async light(seconds: number) {
    let secondsLeft = seconds;
    let energyConsumed = 0;
    const interval = setInterval(() => {
      try {
        this.#powerSource.consume(this.powerConsumption);
        energyConsumed += this.powerConsumption;
        console.log(`Time left to turn light bulb off: ${secondsLeft}`);
        console.log(`Energy left: ${this.#powerSource.getEnergyLeft()}`);
        secondsLeft -= 1;
        if(secondsLeft === 0) {
          clearInterval(interval);
        }
      } catch (e: any) {
        console.log('Not enough energy')
        clearInterval(interval);
      }
    }, ONE_SECOND_IN_MS);
  }

}