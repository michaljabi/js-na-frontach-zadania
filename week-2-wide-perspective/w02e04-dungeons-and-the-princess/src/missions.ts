import { Person } from './Person.js'
import { Castle } from './Castle.js'
import { Dungeon } from './Dungeon.js'
import { Underground } from './Underground.js'

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

export const startFirstMission = () => {
    hades.initTheBarricades()
    kingdom.gotoTheDungeon(knightJohn)
    kingdom.gotoTheDungeon(knightBrienne)
    kingdom.gotoTheDungeon(kingFrancis)
}

export const startSecondMission = () => {
    hades.initTheBarricades()
    kingdom.gotoTheDungeon(knightJohn)
    kingdom.gotoTheDungeon(knightBrienne)
    kingdom.gotoTheDungeon(peasantMathew)
}

export const startThirdMission = () => {
    hades.initTheBarricades()
    kingdom.gotoTheDungeon(knightBrienne)
    kingdom.gotoTheDungeon(knightJohn)
    kingdom.gotoTheDungeon(queenBianca)
}

export const startFourthMission = () => {
    hades.initTheBarricades()
    kingdom.gotoTheDungeon(knightBrienne)
    kingdom.gotoTheDungeon(knightJohn)
    kingdom.gotoTheDungeon(knightBruce)
}