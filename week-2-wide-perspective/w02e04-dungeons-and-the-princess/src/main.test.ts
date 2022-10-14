import { describe, it, expect, beforeEach } from 'vitest';
import { Person, PERSON_TITLE } from './models/Person';
import { Underground } from './models/Underground';
import { Dungeon } from './models/Dungeon';
import { Castle } from './models/Castle';
import { PersonNotAllowedError } from './models/Error';

interface Mission {
  underground: Underground;
  castle: Castle;
}

const initializeMission = (): Mission => {
  const princess = new Person('Fiona', PERSON_TITLE.princess);
  const underground = new Underground(princess);
  const cave = new Dungeon(underground);
  const castle = new Castle(cave);

  return { castle, underground };
};

describe('Rescue scenarios', () => {
  let mission = initializeMission();

  beforeEach(() => {
    mission = initializeMission();
    mission.underground.initTheBarricades();
  });

  const baseCrew = [
    { name: 'John', title: PERSON_TITLE.knight },
    { name: 'Brienne', title: PERSON_TITLE.knight }
  ];

  [
    {
      crew: [...baseCrew, { name: 'Francis', title: PERSON_TITLE.king }],
      expectedResult: 'fail'
    },
    {
      crew: [...baseCrew, { name: 'Mathew', title: PERSON_TITLE.peasant }],
      expectedResult: 'fail'
    },
    {
      crew: [...baseCrew, { name: 'Bianca', title: PERSON_TITLE.peasant }],
      expectedResult: 'fail'
    },
    {
      crew: [...baseCrew, { name: 'Bruce', title: PERSON_TITLE.knight }],
      expectedResult: 'success'
    }
  ].forEach(({ crew, expectedResult }, index) => {
    describe(`Scenario #${index + 1}:`, () => {
      it('Should throw PersonNotAllowedError', () => {
        const performResqueMission = (): void => {
          const { castle } = mission;

          crew
            .map((person) => new Person(person.name, person.title))
            .forEach((person) => {
              castle.gotoTheDungeon(person);
            });
        };

        if (expectedResult === 'fail') {
          expect(performResqueMission).toThrow(PersonNotAllowedError);
        } else {
          expect(performResqueMission).not.toThrowError();
        }
      });
    });
  });
});
