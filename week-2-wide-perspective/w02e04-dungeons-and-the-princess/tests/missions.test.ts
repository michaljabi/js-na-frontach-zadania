import { test, expect, describe } from 'vitest'
import {
    startFirstMission,
    startSecondMission,
    startThirdMission,
    startFourthMission
} from '../src/missions'

describe('Missions', () => {
    test('King shouldn\'t enter the underground!', () => {
        expect(startFirstMission).toThrowError()
    })

    test('Peasant shouldn\'t enter the underground!', () => {
        expect(startSecondMission).toThrowError()
    })

    test('Queen shouldn\'t enter the dungeon!', () => {
        expect(startThirdMission).toThrowError()
    })

    test('Mission composed of knights should end with success!', () => {
        expect(startFourthMission).not.toThrowError()
    })
})