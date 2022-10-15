import { test, expect, describe } from 'vitest'
import {
    startFirstMission,
    startSecondMission,
    startThirdMission,
    startFourthMission
} from '../src/missions'

describe('Missions', () => {
    describe.each([
        { location: /underground/i }
    ])('Undergrounds should throw an error', ({ location }) => {
        test('King cannot enter undergrounds', () => {
            expect(startFirstMission).toThrowError(location)
        })
    })

    describe.each([
        { location: /castle/i }
    ])('Castle should throw an error', ({ location }) => {
        test('Peasant cannot enter the castle', () => {
            expect(startSecondMission).toThrowError(location)
        })
    })

    describe.each([
        { location: /dungeon/i }
    ])('Should throw an error from the dungeon', ({ location }) => {
        test('Queen cannot enter the dungeon', () => {
            expect(startThirdMission).toThrowError(location)
        })
    })

    describe('Should end with success', () => {
        test('Mission composed of knights only should end with success', () => {
            expect(startFourthMission).not.toThrowError()
        })
    })
})
