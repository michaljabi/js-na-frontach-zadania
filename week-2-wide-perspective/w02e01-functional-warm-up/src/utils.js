export const getItemByKey = (object, key) => {
  return object[key];
};

export const getItemsByKey = (array, key) => {
  return array.map((item) => item[key]);
};

export const getSummaryOfItem = (array, key) => {
  return array.reduce((acc, curr) => acc + Number(curr[key]), 0);
};

export const getItemLength = (array) => {
  return array.length;
};

export const getTheMinVal = (array, query) => {
  const arr = array.map((item) => item[query]);
  return Math.min(...arr);
};

export const findItem = (array, key, query, item) => {
  if (typeof query === "number") {
    const obj = array.find((item) => item[key] === String(query));
    if (item) {
      return obj[item];
    }
    return obj;
  }
};

export const getUniqueValues = (array, key) => {
  return [...new Set(array.map((item) => item[key]))];
};

export const getFirstLetter = (array, letter, key) => {
  return array
    .filter((item) => item.name.charAt(0).includes(letter))
    .map((i) => i[key]);
};
