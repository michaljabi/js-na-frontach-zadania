import { Person } from './Person.js'

export class Underground {
    private static INITIAL_NO_OF_BARRICADES = 3
    private noOfBarricades = Underground.INITIAL_NO_OF_BARRICADES

    constructor(private prisoner: Person) {}

    enter(savior: Person) {
        if (savior.title === 'king') {
            throw new Error('King cannot enter the underground!')
        }
        savior.shoutTheName()
        this.saveThePrisoner(savior)
    }

    private saveThePrisoner(savior: Person) {
        if (savior.title !== 'knight') {
            this.addBarricade()
            throw new Error(`${savior.title.charAt(0).toUpperCase()} cannot save the prisoner!`)
        }
        this.removeBarricade()
        if (this.hasNoBarricades()) {
            this.prisoner.sayThanks()
        }
    }

    // Clean state:
    initTheBarricades() {
        this.noOfBarricades = Underground.INITIAL_NO_OF_BARRICADES
    }

    private removeBarricade() {
        this.noOfBarricades -= 1
    }

    private addBarricade() {
        this.noOfBarricades += 1
    }

    private hasNoBarricades() {
        return this.noOfBarricades === 0
    }
}