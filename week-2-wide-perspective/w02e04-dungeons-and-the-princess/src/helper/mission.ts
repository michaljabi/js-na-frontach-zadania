import { Castle } from '../model/castle'
import { DreamTeam } from '../model/person'
import { Underground } from '../model/underground'

export function createRescueMission(saviors: DreamTeam, hades: Underground, kingdom: Castle): void {
    hades.initTheBarricades()
    saviors.forEach(savior => {
        try {
            kingdom.gotoTheDungeon(savior)
        } catch (error) {
            console.error(error + '\n')
        }
    })
}