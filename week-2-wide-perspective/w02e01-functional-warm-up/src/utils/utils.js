export const getNestedValue = (obj, fieldsPath) => fieldsPath
    .split('.')
    .reduce((value, key) => typeof value === 'object' ? value[key] : value, obj)

export const sortAscending = (prevValue, nextValue) => prevValue - nextValue;

export const sortAscendingByField = (field) => (prevObject, nextObject) => (
    sortAscending(getNestedValue(prevObject, field), getNestedValue(nextObject, field))
)

export const sortBy = (predicate) => (prevValue, nextValue) => predicate(prevValue, nextValue)

export const sortByField = (field, predicate) => (prevValue, nextValue) => sortBy(predicate)(prevValue[field], nextValue[field])

export const sumFieldValues = (field) => (total, obj) => total + parseInt(obj[field])

export const fieldMapper = (field) => (obj) => obj[field]

export const filterByField = (field, predicate) => (item) => predicate(item[field])

export const isNameStartsWithLetter = (letter) => (name) => name.startsWith(letter)

export const getUniqueValues = (arr) => Array.from([...new Set(arr)])