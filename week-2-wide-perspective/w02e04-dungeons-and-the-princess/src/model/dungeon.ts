import { Person } from './person';
import { Underground } from './underground';

export class Dungeon {
    constructor(private underground: Underground) { }

    enter(person: Person) {
        this.underground.enter(person)
    }
}