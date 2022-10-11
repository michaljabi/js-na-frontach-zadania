import { usersData } from "./data-store/users.js";
import { fruitsData } from "./data-store/fruits.js";
import { randomAlbumData } from "./data-store/music-album.js";

// Do wyliczenia danych poniżej użyj faktycznego źródła: randomAlbumData

const length = randomAlbumData.tracks.length;

const sumValueByProperty = (arr, property) => {
  if (!Array.isArray(arr)) {
    throw new Error("arr must be of the array type");
  }
  if (!Boolean(property)) {
    throw new Error("Property is required");
  }
  return arr.reduce((prev, curr) => {
    return prev + Number(curr[property]);
  }, 0);
};

const duration = sumValueByProperty(randomAlbumData.tracks, "duration");

const findSmallestValueByProperty = (arr, property) => {
  if (!Array.isArray(arr)) {
    throw new Error("arr must be of the array type");
  }
  if (!Boolean(property)) {
    throw new Error("Property is required");
  }
  return arr.reduce((prev, curr) => {
    return prev[property] < curr[property] ? prev : curr;
  });
};

const shortestTrack = findSmallestValueByProperty(randomAlbumData.tracks, "duration");

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
