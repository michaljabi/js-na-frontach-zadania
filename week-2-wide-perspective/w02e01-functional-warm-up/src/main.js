/* eslint-disable no-console */
import { nameOfAlbum, artistNameOfAlbum, numberOfTracksOnTheAlbum, totalAlbumDuration, shortestTrack } from './info/album.info.js';
import { allFruitFamilies, allFruitStartsWithG, LowestCaloriesFruit } from './info/fruits.info.js';
import { allUsersNames, userShortestWebsiteName } from './info/users.info.js';

// Do wyliczenia danych poniżej użyj faktycznego źródła: randomAlbumData
console.log(`-- Album Info -- 
Name: ${nameOfAlbum}
Artist: ${artistNameOfAlbum}
Number of tracks: ${numberOfTracksOnTheAlbum}
Total album duration: ${totalAlbumDuration}
Shortest track: "${shortestTrack}"
`);

// Do wyliczenia danych poniżej użyj faktycznego źródła: fruitsData
console.log(`-- Fruits Info -- 
All fruit families: ${allFruitFamilies}
All fruit starts with "g": ${allFruitStartsWithG}
Lowest calories: ${LowestCaloriesFruit}
`);

// Do wyliczenia danych poniżej użyj faktycznego źródła: usersData
console.log(`-- Users Info -- 
All user names: ${allUsersNames}
User shortest website name: ${userShortestWebsiteName}
`);
