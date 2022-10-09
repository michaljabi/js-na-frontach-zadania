import {LevelName} from "./type";
import {Underground} from "./Underground";
import {Person} from "./Person";
import {levelGuardian} from "./main";

export class Dungeon {
    private static NAME: LevelName =  "DUNGEON"
    constructor(private underground: Underground) {}
    enter(p: Person) {
        // #RQ2: queen cannot enter the dungeon!
        levelGuardian(p.title,  Dungeon.NAME)
        this.underground.enter(p)
    }
}