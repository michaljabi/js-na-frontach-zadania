import { usersData } from '../data-store/users';
import { getArrayOfValuesByProperty, getByProperty, getObjectTheSmallestValueByProperty } from '../helpers';

export const allUsersNames = getArrayOfValuesByProperty(usersData, 'name');
export const userShortestWebsiteName = getByProperty(getObjectTheSmallestValueByProperty(usersData, 'website', 'length'), 'website');
