import { Person } from './Person.js'
import { Underground } from './Underground.js'

export class Dungeon {
    constructor(private underground: Underground) {}

    enter(p: Person) {
        if (p.title === 'queen') {
            throw new Error('Queen cannot enter the dungeon!')
        }
        this.underground.enter(p)
    }
}