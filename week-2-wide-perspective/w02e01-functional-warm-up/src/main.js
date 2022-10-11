import { usersData } from './data-store/users.js'
import { fruitsData } from './data-store/fruits.js'
import { randomAlbumData } from './data-store/music-album.js'
import {uniq, pluck, startWith, shortestStringInArray, sum, sortByPropertyValue} from './helper.js'

// Do wyliczenia danych poniżej użyj faktycznego źródła: randomAlbumData

console.log(`-- Album Info -- 
Name: ${randomAlbumData.title}
Artist: ${randomAlbumData.artist.name}
Number of tracks: ${randomAlbumData.tracks.length}
Total album duration: ${sum(randomAlbumData.tracks.map(pluck('duration')))}
Shortest track: "${sortByPropertyValue(randomAlbumData.tracks, ['duration']).title}"
`)

// Do wyliczenia danych poniżej użyj faktycznego źródła: fruitsData

const lowestCaloriesFruit = sortByPropertyValue(fruitsData, ['nutritions', 'calories']);
console.log(`-- Fruits Info -- 
All fruit families: ${uniq(fruitsData.map(pluck('family')))}
All fruit starts with "g": ${uniq(fruitsData.map(pluck('name'))).filter(startWith('g'))}
Lowest calories: ${lowestCaloriesFruit.name}, ${lowestCaloriesFruit.nutritions.calories} calories 
`)

// Do wyliczenia danych poniżej użyj faktycznego źródła: usersData

console.log(`-- Users Info -- 
All user names: ${usersData.map(user => user.name.split(' ')[0])}
User shortest website name: ${shortestStringInArray(usersData.map(pluck('website')))}
`)
