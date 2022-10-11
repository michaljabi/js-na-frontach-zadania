export const uniq = (array) => Array.from(new Set(array));
export const pluck = (propertyName) => (object) => object[propertyName]
export const startWith = (letter) => (element) => element.toLowerCase().startsWith(letter);
export const shortestStringInArray = (array) => array.sort((a, b) =>  String(a).length - String(b).length)[0];
export const lowestValueInArray = (array) => array.sort((a, b) =>  Number(a) - Number(b))[0];
export const sum = (array) => array.reduce((a,b) => Number(a) + Number(b), 0)
export const sortByPropertyValue = (array, properties) => {
    return array.sort((a, b) => {
       return Number(getProperty(a, properties)) - Number(getProperty(b, properties))
     })[0]
}

function getProperty(object, properties) {
    // To mi się nie podoba - bede wdzieczny za jakąś rade jak moge zapisać to w bardziej generyczny spsób :)
    switch (properties.length) {
        case 1:
            return object[properties[0]]
        case 2:
            return object[properties[0]][properties[1]]
        case 3:
            return object[properties[0]][properties[1]][properties[2]]
        case 4:
            return object[properties[0]][properties[1]][properties[2]][properties[3]]
        default:
            throw new Error('Support for 4 nested properties')
    }
}