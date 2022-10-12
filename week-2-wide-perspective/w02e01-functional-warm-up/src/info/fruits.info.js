import { fruitsData } from '../data-store/fruits.js';
import {
  getArrayWithUniqueValues,
  getArrayOfValuesByProperty,
  getArrayStartingWithLetter,
  getByProperty,
  getObjectTheSmallestValueByProperty,
} from '../helpers.js';

export const allFruitFamilies = getArrayWithUniqueValues(getArrayOfValuesByProperty(fruitsData, 'family'));
export const allFruitStartsWithG = getArrayStartingWithLetter(getArrayOfValuesByProperty(fruitsData, 'name'), 'g');
export const LowestCaloriesFruit = getByProperty(getObjectTheSmallestValueByProperty(fruitsData, 'nutritions', 'calories'), 'name');
