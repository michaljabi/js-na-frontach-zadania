export const getLength = (/** @type {object[]} */ arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be of the array type');
  }
  return arr.length;
};

export const getByProperty = (/** @type {object} */ obj, /** @type {string[]} */ ...properties) => {
  let tempObj = obj;
  if (!tempObj) {
    throw new Error('Object is required');
  }
  if (!properties) {
    throw new Error('Property is required');
  }
  properties.forEach((property) => {
    if (!tempObj[property] && tempObj[property] !== 0) {
      throw new Error(`Property ${property} does not exist`);
    }
    tempObj = tempObj[property];
  });
  return properties.reduce((prev, curr) => prev[curr], obj);
};

export const sumValueByProperty = (/** @type {object[]} */ arr, /** @type {string[]} */ ...properties) => {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be of the array type');
  }
  return arr.reduce((prev, curr) => prev + Number(getByProperty(curr, ...properties)), 0);
};

export const getObjectTheSmallestValueByProperty = (/** @type {object[]} */ arr, /** @type {string[]} */ ...properties) => {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be of the array type');
  }
  return arr.reduce((prev, curr) => (getByProperty(prev, ...properties) > getByProperty(curr, ...properties) ? curr : prev));
};

export const getArrayWithUniqueValues = (/** @type {string[]} */ arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be of the array type');
  }
  return [...new Set(arr)];
};

export const getArrayStartingWithLetter = (/** @type {string[]} */ arr, /** @type {string} */ letter) => {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be of the array type');
  }
  if (!letter) {
    throw new Error('letter is required');
  }
  return arr.filter((item) => item.toLocaleLowerCase().startsWith(letter.toLocaleLowerCase()));
};

export const getArrayOfValuesByProperty = (/** @type {object[]} */ arr, /** @type {string[]} */ ...properties) => {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be of the array type');
  }
  return arr.map((item) => getByProperty(item, ...properties));
};
