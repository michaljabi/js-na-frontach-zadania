/**
 * Dla uproszczenia obrazu sprawy — wszystkie klasy i logika aplikacji
 * zostały napisane w jednym pliku.
 *
 * ... oczywiście, że to razi po oczach — nie możemy tak tego zostawić w finałowej wersji!
 * */

import { Underground } from './models/Underground';
import { Dungeon } from './models/Dungeon';
import { Castle } from './models/Castle';
import { Person, PersonTitle } from './models/Person';

const princess = new Person('Fiona', PersonTitle.princess);
const hades = new Underground(princess);
const cave = new Dungeon(hades);
const kingdom = new Castle(cave);

// Śmiałkowie:
const knightJohn = new Person('John', PersonTitle.knight);
const knightBrienne = new Person('Brienne', PersonTitle.knight);
const kingFrancis = new Person('Francis', PersonTitle.king);
const peasantMathew = new Person('Mathew', PersonTitle.peasant);
const queenBianca = new Person('Bianca', PersonTitle.queen);
const knightBruce = new Person('Bruce', PersonTitle.knight);

// Próba "odbicia" królewny z podziemi lochów:

// Misja ratunkowa nr 1:
try {
  hades.initTheBarricades();
  kingdom.gotoTheDungeon(knightJohn);
  kingdom.gotoTheDungeon(knightBrienne);
  kingdom.gotoTheDungeon(kingFrancis);
} catch (error: any) {
  console.log(error.message);
}

// Misja ratunkowa nr 2:
try {
  hades.initTheBarricades();
  kingdom.gotoTheDungeon(knightJohn);
  kingdom.gotoTheDungeon(knightBrienne);
  kingdom.gotoTheDungeon(peasantMathew);
} catch (error: any) {
  console.log(error.message);
}

// Misja ratunkowa nr 3:
try {
  hades.initTheBarricades();
  kingdom.gotoTheDungeon(knightBrienne);
  kingdom.gotoTheDungeon(knightJohn);
  kingdom.gotoTheDungeon(queenBianca);
} catch (error: any) {
  console.log(error.message);
}

// Misja ratunkowa 4:
try {
  hades.initTheBarricades();
  kingdom.gotoTheDungeon(knightBrienne);
  kingdom.gotoTheDungeon(knightJohn);
  kingdom.gotoTheDungeon(knightBruce);
} catch (error: any) {
  console.log(error.message);
}

export {};
