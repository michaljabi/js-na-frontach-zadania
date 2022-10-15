/**
 * Dla uproszczenia obrazu sprawy — wszystkie klasy i logika aplikacji
 * zostały napisane w jednym pliku.
 *
 * ... oczywiście, że to razi po oczach — nie możemy tak tego zostawić w finałowej wersji!
 * */

import { Castle } from './actors/Castle';
import { Dungeon } from './actors/Dungeon';
import { Person } from './actors/Person';
import { Underground } from './actors/Underground';
import { errorHandler } from './utils/errorHandler';
import { MissionFailedError } from './utils/errors';

const princess = new Person('Fiona', 'princess');
const hades = new Underground(princess);
const cave = new Dungeon(hades);
const kingdom = new Castle(cave);

// Śmiałkowie:
const knightJohn = new Person('John', 'knight');
const knightBrienne = new Person('Brienne', 'knight');
const kingFrancis = new Person('Francis', 'king');
const peasantMathew = new Person('Mathew', 'peasant');
const queenBianca = new Person('Bianca', 'queen');
const knightBruce = new Person('Bruce', 'knight');

// Próba "odbicia" królewny z podziemi lochów:

// Misja ratunkowa nr 1:
try {
  hades.initTheBarricades();
  kingdom.gotoTheDungeon(knightJohn);
  kingdom.gotoTheDungeon(knightBrienne);
  kingdom.gotoTheDungeon(kingFrancis);
} catch (err) {
  if (err instanceof MissionFailedError) {
    errorHandler(err);
  }
}

// Misja ratunkowa nr 2:
try {
  hades.initTheBarricades();
  kingdom.gotoTheDungeon(knightJohn);
  kingdom.gotoTheDungeon(knightBrienne);
  kingdom.gotoTheDungeon(peasantMathew);
} catch (err) {
  if (err instanceof MissionFailedError) {
    errorHandler(err);
  }
}

// Misja ratunkowa nr 3:
try {
  hades.initTheBarricades();
  kingdom.gotoTheDungeon(knightBrienne);
  kingdom.gotoTheDungeon(knightJohn);
  kingdom.gotoTheDungeon(queenBianca);
} catch (err) {
  if (err instanceof MissionFailedError) {
    errorHandler(err);
  }
}

// Misja ratunkowa 4:
try {
  hades.initTheBarricades();
  kingdom.gotoTheDungeon(knightBrienne);
  kingdom.gotoTheDungeon(knightJohn);
  kingdom.gotoTheDungeon(knightBruce);
} catch (err) {
  if (err instanceof MissionFailedError) {
    errorHandler(err);
  }
}
