import {LevelName} from "./type";
import {Dungeon} from "./Dungeon";
import {Person} from "./Person";
import {levelGuardian} from "./main";

export class Castle {
    private static NAME: LevelName = "CASTLE"
    gotoTheDungeon(daredevil: Person) {
        // #RQ1: peasant cannot be at the Castle !
        levelGuardian(daredevil.title, Castle.NAME)
        this.dungeon.enter(daredevil)
    }
    constructor(private dungeon: Dungeon) {}
}