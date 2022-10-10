import { Person } from "./Person";

export class Underground {
  private static INITIAL_NO_OF_BARRICADES = 3;
  private noOfBarricades = Underground.INITIAL_NO_OF_BARRICADES;

  constructor(private prisoner: Person) {}

  enter(savior: Person) {
    // #RQ3: king cannot enter Underground !

    try {
      if (savior.title === "king") {
        throw new Error("king cannot enter Underground !");
      }
      savior.shoutTheName();
      this.saveThePrisoner(savior);
    } catch (error) {
      console.log(error);
    }
  }

  private saveThePrisoner(savior: Person) {
    // #RQ4: only knight can attempt to save prisoner!
    // #RQ5: If not knight Evil dragon will set up new barricade
    // #RQ6: one knight will remove one barricade

    try {
      if (savior.title != "knight") {
        this.addBarricade()
        throw new Error('only knight can attempt to save prisoner!')
      }else{
        this.removeBarricade()
      }
    } catch (error) {

    }

    if (this.hasNoBarricades()) {
      this.prisoner.sayThanks();
    }
  }

  // Clean state:
  initTheBarricades() {
    this.noOfBarricades = Underground.INITIAL_NO_OF_BARRICADES;
  }

  private removeBarricade() {
    this.noOfBarricades -= 1;
  }
  private addBarricade() {
    this.noOfBarricades += 1;
  }

  private hasNoBarricades() {
    return this.noOfBarricades === 0;
  }
}
