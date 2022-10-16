import { Person } from './person'

export class Underground {
    private static INITIAL_NO_OF_BARRICADES = 3
    private noOfBarricades = Underground.INITIAL_NO_OF_BARRICADES

    constructor(private prisoner: Person) { }

    enter(savior: Person): void {
        this.throwIfPersonNotAllow(savior)
        savior.shoutTheName()
        this.saveThePrisoner(savior)
    }

    private saveThePrisoner(savior: Person): void {
        if (savior.title === 'knight') {
            this.removeBarricade()
        };
        if (this.hasNoBarricades()) {
            this.prisoner.sayThanks()
        }
    }

    initTheBarricades(): void {
        this.noOfBarricades = Underground.INITIAL_NO_OF_BARRICADES
    }

    private removeBarricade(): void {
        this.noOfBarricades -= 1
    }

    private hasNoBarricades(): boolean {
        return this.noOfBarricades === 0
    }

    private throwIfPersonNotAllow(person: Person): void {
        if (person.title === 'king') {
            throw new Error("King can not be in the underground. We don't have enough saviors for the rescue mission and we all will die! Mission failed");
        }
    }
}
