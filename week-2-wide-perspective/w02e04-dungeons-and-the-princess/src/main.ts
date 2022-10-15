import { Castle } from './model/castle'
import { Dungeon } from './model/dungeon'
import { Person } from './model/person'
import { Underground } from './model/underground'

const princess = new Person('Fiona', 'princess')
const hades = new Underground(princess)
const cave = new Dungeon(hades)
const kingdom = new Castle(cave)

// Śmiałkowie:
const knightJohn = new Person('John', 'knight')
const knightBrienne = new Person('Brienne', 'knight')
const kingFrancis = new Person('Francis', 'king')
const peasantMathew = new Person('Mathew', 'peasant')
const queenBianca = new Person('Bianca', 'queen')
const knightBruce = new Person('Bruce', 'knight')

// Próba "odbicia" królewny z podziemi lochów:

// Misja ratunkowa nr 1:
hades.initTheBarricades()
kingdom.gotoTheDungeon(knightJohn)
kingdom.gotoTheDungeon(knightBrienne)
kingdom.gotoTheDungeon(kingFrancis)

// Misja ratunkowa nr 2:
hades.initTheBarricades()
kingdom.gotoTheDungeon(knightJohn)
kingdom.gotoTheDungeon(knightBrienne)
kingdom.gotoTheDungeon(peasantMathew)

// Misja ratunkowa nr 3:
hades.initTheBarricades()
kingdom.gotoTheDungeon(knightBrienne)
kingdom.gotoTheDungeon(knightJohn)
kingdom.gotoTheDungeon(queenBianca)

// Misja ratunkowa 4:
hades.initTheBarricades()
kingdom.gotoTheDungeon(knightBrienne)
kingdom.gotoTheDungeon(knightJohn)
kingdom.gotoTheDungeon(knightBruce)
