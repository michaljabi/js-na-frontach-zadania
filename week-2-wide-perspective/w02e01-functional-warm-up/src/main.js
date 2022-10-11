import { usersData } from "./data-store/users.js";
import { fruitsData } from "./data-store/fruits.js";
import { randomAlbumData } from "./data-store/music-album.js";

// Do wyliczenia danych poniżej użyj faktycznego źródła: randomAlbumData

const length = randomAlbumData.tracks.length;
const duration = randomAlbumData.tracks.reduce((prev, curr) => {
  return prev + Number(curr.duration);
}, 0);

const determineTheObjectWithTheSmallestValue = (array, property) => {
  return array.reduce((prev, curr) => {
    if (property) {
      return prev[property] < curr[property] ? prev : curr;
    }
  });
};

const shortestTrack = determineTheObjectWithTheSmallestValue(randomAlbumData.tracks, "duration");

console.log(`-- Album Info -- 
Name: ${randomAlbumData.title}
Artist: ${randomAlbumData.artist.name}
Number of tracks: ${length}
Total album duration: ${duration}
Shortest track: "${shortestTrack.title}"
`);

// Do wyliczenia danych poniżej użyj faktycznego źródła: fruitsData
console.log(`-- Fruits Info -- 
All fruit families: ${["Rosaceae", "Moraceae"]}
All fruit starts with "g": ${["Guava", "GreenApple"]}
Lowest calories: ${"Cherry, 50 calories"}
`);

// Do wyliczenia danych poniżej użyj faktycznego źródła: usersData
console.log(`-- Users Info -- 
All user names: ${["Leanne", "Ervin", "Clementine"]}
User shortest website name: ${"conrad.com"}
`);
