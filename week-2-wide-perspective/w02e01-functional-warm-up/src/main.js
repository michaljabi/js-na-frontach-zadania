import { usersData } from './data-store/users.js'
import { fruitsData } from './data-store/fruits.js'
import { randomAlbumData } from './data-store/music-album.js'

// Do wyliczenia danych poniżej użyj faktycznego źródła: randomAlbumData

function getTheShortestTrack(trackList) {
    const sortedTracks = trackList
    .map(track =>  Object.assign(track, { duration: +track.duration }))
    .sort((a,b) => a.duration - b.duration);
    return sortedTracks[0];
}

console.log(`-- Album Info -- 
Name: ${randomAlbumData.title}
Artist: ${randomAlbumData.artist.name}
Number of tracks: ${randomAlbumData.tracks.length}
Total album duration: ${randomAlbumData.tracks.reduce((a,b) => a + (+b.duration), 0 )}
Shortest track: "${getTheShortestTrack(randomAlbumData.tracks).title}"
`)

// Do wyliczenia danych poniżej użyj faktycznego źródła: fruitsData

function getUniqValues(list) {
    return Array.from(new Set(list))
}

function getUniqValuesStartWithLetter(list, letter) {
    const uniqList = getUniqValues(list);
    return uniqList.filter(element => element.startsWith(letter))
}

const lowestCaloriesFruit = fruitsData.sort((a, b) => a.nutritions.calories - b.nutritions.calories)[0]

console.log(`-- Fruits Info -- 
All fruit families: ${getUniqValues(fruitsData.map(fruit => fruit.family))}
All fruit starts with "g": ${getUniqValuesStartWithLetter(fruitsData.map(fruit => fruit.name), "G")}
Lowest calories: ${lowestCaloriesFruit.name}, ${lowestCaloriesFruit.nutritions.calories} calories 
`)

// Do wyliczenia danych poniżej użyj faktycznego źródła: usersData

const shortestWebsiteName = usersData.sort((a, b) => a.website.length - b.website.length)[0].website;

console.log(`-- Users Info -- 
All user names: ${usersData.map(user => user.name.split(' ')[0])}
User shortest website name: ${shortestWebsiteName}
`)
