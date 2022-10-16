import { Dungeon } from './dungeon';
import { Person } from './person';

export class Castle {
    constructor(private dungeon: Dungeon) { }

    gotoTheDungeon(daredevil: Person) {
        this.throwIfPersonNotAllow(daredevil);
        this.dungeon.enter(daredevil)
    }

    private throwIfPersonNotAllow(person: Person): void {
        if (person.title === 'peasant') {
            throw new Error("Peasant can not be in the castle. We don't have enough saviors for the rescue mission and we all will die! Mission failed");
        }

        if (person.title === 'princess') {
            throw new Error("The princess is one and she is trapped in the dungeon and cannot go free at the same time. We have a trickster among us");
        }

        if (person.title === 'queen') {
            throw new Error("Queen can not be in the dungeon. We don't have enough saviors for the rescue mission and we all will die! Mission failed");
        }
    }
}