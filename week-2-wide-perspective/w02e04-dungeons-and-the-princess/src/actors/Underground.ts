import { UndergroundError } from '../utils/errors'
import { Person } from './Person'

export class Underground {
    private static INITIAL_NO_OF_BARRICADES = 3
    private noOfBarricades = Underground.INITIAL_NO_OF_BARRICADES
  
    constructor(private prisoner: Person) {}
  
    enter(savior: Person) {
      // #RQ3: king cannot enter Underground !
      if (savior.title === 'king') {
        throw new UndergroundError(savior, 'king cannot enter Underground !')
      }
      savior.shoutTheName()
      this.saveThePrisoner(savior)
    }
  
    private saveThePrisoner(savior: Person) {
      // #RQ4: only knight can attempt to save prisoner!
      // #RQ5: If not knight Evil dragon will set up new barricade
      if (savior.title !== 'knight') {
        this.addBarricade()
        throw new UndergroundError(savior, 'only knight can attempt to save prisoner!')
      }
      // #RQ6: one knight will remove one barricade
      this.removeBarricade()
      if (this.hasNoBarricades()) {
        this.prisoner.sayThanks()
      }
    }
  
    // Clean state:
    initTheBarricades() {
      this.noOfBarricades = Underground.INITIAL_NO_OF_BARRICADES
    }

    private addBarricade() {
      this.noOfBarricades += 1
    }
  
    private removeBarricade() {
      this.noOfBarricades -= 1
    }
  
    private hasNoBarricades() {
      return this.noOfBarricades === 0
    }
  }