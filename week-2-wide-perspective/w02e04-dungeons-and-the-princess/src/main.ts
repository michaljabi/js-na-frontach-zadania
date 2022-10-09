/**
 * Dla uproszczenia obrazu sprawy — wszystkie klasy i logika aplikacji
 * zostały napisane w jednym pliku.
 *
 * ... oczywiście, że to razi po oczach — nie możemy tak tego zostawić w finałowej wersji!
 * */
import {LevelName, Title} from "./type";
import {Person} from "./Person";
import {Underground} from "./Underground";
import {Dungeon} from "./Dungeon";
import {Castle} from "./Castle";

export const levelGuardian = (title: Title,levelName: LevelName) => {
  if(title === "peasant" && levelName === "CASTLE") {
    throw  new Error("Peasant cannot enter the the Castle")
  }
  if(title === "queen" && levelName === "DUNGEON") {
    throw  new Error("Queen cannot enter the the DUNGEON")
  }
  if(title === "king" && levelName === "UNDERGROUND") {
    throw  new Error("King cannot enter the the UNDERGROUND")
  }
}

const princess = new Person('Fiona', 'princess')
const hades = new Underground(princess)
const cave = new Dungeon(hades)
const kingdom = new Castle(cave)

// Śmiałkowie:
const knightJohn = new Person('John', 'knight')
const knightBrienne = new Person('Brienne', 'knight')
const knightBruce = new Person('Bruce', 'knight')


const kingFrancis = new Person('Francis', 'king')
const peasantMathew = new Person('Mathew', 'peasant')
const queenBianca = new Person('Bianca', 'queen')

// Próba "odbicia" królewny z podziemi lochów:

// Misja ratunkowa nr 1:
// hades.initTheBarricades()
// kingdom.gotoTheDungeon(knightJohn)
// kingdom.gotoTheDungeon(knightBrienne)
// kingdom.gotoTheDungeon(kingFrancis)

// Misja ratunkowa nr 2:
// hades.initTheBarricades()
// kingdom.gotoTheDungeon(knightJohn)
// kingdom.gotoTheDungeon(knightBrienne)
// kingdom.gotoTheDungeon(peasantMathew)

// Misja ratunkowa nr 3:
// hades.initTheBarricades()
// kingdom.gotoTheDungeon(knightBrienne)
// kingdom.gotoTheDungeon(knightJohn)
// kingdom.gotoTheDungeon(queenBianca)

// Misja ratunkowa 4:
hades.initTheBarricades()
kingdom.gotoTheDungeon(knightBrienne)
kingdom.gotoTheDungeon(knightJohn)
kingdom.gotoTheDungeon(knightBruce)
