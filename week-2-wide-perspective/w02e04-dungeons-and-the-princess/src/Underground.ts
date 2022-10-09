import {LevelName} from "./type";
import {Person} from "./Person";
import {levelGuardian} from "./main";

export class Underground {
    private static NAME: LevelName =  "UNDERGROUND"
    private static INITIAL_NO_OF_BARRICADES = 3
    private noOfBarricades = Underground.INITIAL_NO_OF_BARRICADES

    constructor(private prisoner: Person) {}

    enter(savior: Person) {
        // #RQ3: king cannot enter Underground !
        levelGuardian(savior.title,Underground.NAME)
        savior.shoutTheName()
        this.saveThePrisoner(savior)
    }


    private saveThePrisoner(savior: Person) {
        // #RQ4: only knight can attempt to save prisoner!
        // #RQ5: If not knight Evil dragon will set up new barricade
        if(savior.title !== "knight") {
            this.addNewBarricade()
        }
        // #RQ6: one knight will remove one barricade
        if(savior.title === "knight") {
            this.removeBarricade()
        }
        if (this.hasNoBarricades()) {
            this.prisoner.sayThanks()
            this.initTheBarricades()
        }
    }

    // Clean state:
    initTheBarricades() {
        this.noOfBarricades = Underground.INITIAL_NO_OF_BARRICADES
    }

    private removeBarricade() {
        this.noOfBarricades -= 1
        this.displayAmountBarricades()
    }

    private hasNoBarricades() {
        return this.noOfBarricades === 0
    }

    private addNewBarricade() {
        this.noOfBarricades += 1
        this.displayAmountBarricades()
    }

    private displayAmountBarricades() {
        console.log(`Now we have  ${this.noOfBarricades} barricades.`)
    }
}