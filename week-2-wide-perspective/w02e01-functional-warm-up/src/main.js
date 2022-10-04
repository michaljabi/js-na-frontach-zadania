import { usersData } from "./data-store/users.js";
import { fruitsData } from "./data-store/fruits.js";
import { randomAlbumData } from "./data-store/music-album.js";
import {
  getItemsByKey,
  findItem,
  getFirstLetter,
  getItemByKey,
  getItemLength,
  getSummaryOfItem,
  getTheMinVal,
  getUniqueValues,
} from "./utils.js";
import { getTheShortestString } from "./helpers/get-album-info.js";

// Do wyliczenia danych poniżej użyj faktycznego źródła: randomAlbumData

console.log(`-- Album Info -- 
// Name: ${getItemByKey(randomAlbumData, "title")}
Artist: ${getItemByKey(randomAlbumData.artist, "name")}
Number of tracks: ${getSummaryOfItem(randomAlbumData.tracks, "duration")}
Total album duration: ${getItemLength(randomAlbumData.tracks)}
Shortest track: "${findItem(
  randomAlbumData.tracks,
  "duration",
  getTheMinVal(randomAlbumData.tracks, "duration"),
  "title"
)}"
`);

// Do wyliczenia danych poniżej użyj faktycznego źródła: fruitsData
console.log(`-- Fruits Info -- 
All fruit families: ${getUniqueValues(fruitsData, "family")}
All fruit starts with "g": ${getFirstLetter(fruitsData, "G", "name")}
Lowest calories: ${
  fruitsData.find(
    (item) =>
      item.nutritions.calories ===
      getTheMinVal(
        fruitsData.map((item) => item.nutritions),
        "calories"
      )
  ).name
} 
`);
// w przypadku lowest calories nie wiem jak zaimplementowac taka funkcje

// Do wyliczenia danych poniżej użyj faktycznego źródła: usersData
console.log(`-- Users Info -- 
All user names: ${getItemsByKey(usersData, "name")}
User shortest website name: ${
  usersData.find(
    (i) =>
      i.website.length === getTheShortestString(usersData.map((i) => i.website))
  ).username
}
`);
