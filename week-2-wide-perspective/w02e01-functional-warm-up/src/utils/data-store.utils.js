export function getItemByKey(obj, key) {
    return obj[key];
}

export function getAllItemsByKey(array, key) {
    return array.map(item => item[key]);
}

export function getValuesStartsWith(array, key, value) {
    return array.filter(item => item[key].toLowerCase().startsWith(value)).map(item => item[key]);
}

export function getItemsCount(array) {
    return array.length;
}

export function getItemsSum(array, key) {
    return array.reduce((acc, item) => acc + parseInt(item[key]), 0);
}

export function getMinValue(array, key) {
    return array.reduce((acc, item) => {
        let itemValue;
        let accValue;

        if (key.includes('.')) {
            itemValue = key.split('.').reduce((acc, key) => acc[key], item);
            accValue = key.split('.').reduce((acc, key) => acc[key], acc);
        } else {
            itemValue = item[key];
            accValue = acc[key];
        }

        if (typeof itemValue === 'string') {
            return accValue.length < itemValue.length ? acc : item;
        }

        if (typeof itemValue === 'number') {
            return accValue < itemValue ? acc : item;
        }

        return acc;
    });
}
