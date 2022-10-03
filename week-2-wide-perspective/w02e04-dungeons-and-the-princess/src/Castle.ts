import { Person } from './Person.js'
import { Dungeon } from './Dungeon.js'

export class Castle {
    constructor(private dungeon: Dungeon) {}

    gotoTheDungeon(daredevil: Person) {
        if (daredevil.title === 'peasant') {
            throw new Error('Peasant cannot enter the castle!')
        }
        this.dungeon.enter(daredevil)
    }
}