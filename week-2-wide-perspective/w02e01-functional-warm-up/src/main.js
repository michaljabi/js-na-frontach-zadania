import { fruitsData } from './data-store/fruits.js'
import { usersData } from './data-store/users.js'
import { randomAlbumData } from './data-store/music-album.js'
import {
    fieldMapper,
    filterByField, getUniqueValues,
    isNameStartsWithLetter, sortAscending,
    sortAscendingByField, sortByField,
    sumFieldValues
} from './utils/utils.js'

// Do wyliczenia danych poniżej użyj faktycznego źródła: randomAlbumData
console.log(`-- Album Info -- 
Name: ${randomAlbumData.title}
Artist: ${randomAlbumData.artist.name}
Number of tracks: ${randomAlbumData.tracks.length}
Total album duration: ${randomAlbumData.tracks.reduce(sumFieldValues('duration'), 0)}
Shortest track: "${randomAlbumData.tracks.sort(sortAscendingByField('duration'))[0].title}"
`)

// Do wyliczenia danych poniżej użyj faktycznego źródła: fruitsData
console.log(`-- Fruits Info -- 
All fruit families: ${getUniqueValues(fruitsData.map(fieldMapper('genus')))}
All fruit starts with "g": ${
    fruitsData.filter(filterByField('name', isNameStartsWithLetter('G'))).map(fieldMapper('name'))
}
Lowest calories: ${fruitsData.sort(sortAscendingByField('nutritions.calories'))[0].name}
`)

// Do wyliczenia danych poniżej użyj faktycznego źródła: usersData
console.log(`-- Users Info -- 
All user names: ${usersData.map(fieldMapper('name'))}
User shortest website name: ${
    usersData.sort(sortByField('website', (prevName, nextName) => sortAscending(prevName.length, nextName.length)))[0].website
}
`)
