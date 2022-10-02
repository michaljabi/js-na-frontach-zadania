import { usersData } from "./data-store/users.js";
import { fruitsData } from "./data-store/fruits.js";
import { randomAlbumData } from "./data-store/music-album.js";

const lowestCaloriesFruit = fruitsData
  .map(({ name, nutritions }) => ({
    name,
    calories: nutritions.calories,
  }))
  .find(
    ({ calories }) =>
      calories ===
      Math.min(...fruitsData.map(({ nutritions }) => nutritions.calories))
  );

// Do wyliczenia danych poniżej użyj faktycznego źródła: randomAlbumData
console.log(`-- Album Info -- 
Name: ${randomAlbumData.genres[0].name}
Artist: ${randomAlbumData.artist.name}
Number of tracks: ${randomAlbumData.tracks.length}
Total album duration: ${randomAlbumData.tracks.reduce(
  (acc, curr) => acc + Number(curr.duration),
  0
)}
Shortest track: "${
  randomAlbumData.tracks.find(
    ({ duration }) =>
      Number(duration) ===
      Math.min(...randomAlbumData.tracks.map(({ duration }) => duration))
  ).title
}"
`);

// Do wyliczenia danych poniżej użyj faktycznego źródła: fruitsData
console.log(`-- Fruits Info -- 
All fruit families: ${Array.from(
  new Set(fruitsData.map(({ family }) => family))
)}
All fruit starts with "g": ${fruitsData
  .map(({ name }) => name)
  .filter((fruit) => fruit.startsWith("G"))}
Lowest calories: ${lowestCaloriesFruit.name}, ${
  lowestCaloriesFruit.calories
} calories"}
`);

// Do wyliczenia danych poniżej użyj faktycznego źródła: usersData
console.log(`-- Users Info -- 
All user names: ${usersData.map(({ username }) => username)}
User shortest website name: ${
  usersData.find(
    ({ username }) =>
      username.length ===
      Math.min(...usersData.map(({ username }) => username.length))
  ).username
}
`);
