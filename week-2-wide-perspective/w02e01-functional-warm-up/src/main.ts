import { usersData } from "./data-store/users";
import { fruitsData } from "./data-store/fruits";
import { randomAlbumData } from "./data-store/music-album";

// Do wyliczenia danych poniżej użyj faktycznego źródła: randomAlbumData

const shortestTrack = randomAlbumData.tracks.reduce((acc, track) => {
  if (parseInt(acc.duration) < parseInt(track.duration)) {
    return acc;
  } else {
    return track;
  }
});

console.log(`-- Album Info -- 
Name: ${randomAlbumData.title}
Artist: ${randomAlbumData.artist.name}
Number of tracks: ${randomAlbumData.tracks.length}
Total album duration: ${randomAlbumData.tracks.reduce(
  (acc, track) => acc + parseInt(track.duration),
  0
)} seconds
Shortest track: "${shortestTrack.title}"
`);

const fruitFamilies = [...new Set(fruitsData.map((fruit) => fruit.family))];
const startsWithG = fruitsData.filter((fruit) =>
  fruit.name.toLowerCase().startsWith("g")
);
const lowestCaloriesFriut = fruitsData.reduce((acc, fruit) => {
  if (acc.nutritions.calories < fruit.nutritions.calories) {
    return acc;
  } else {
    return fruit;
  }
});

console.log(`-- Fruits Info -- 
All fruit families: ${fruitFamilies.join(", ")}
All fruit starts with "g": ${startsWithG.join(", ")}
Lowest calories: ${lowestCaloriesFriut.name}
`);

// Do wyliczenia danych poniżej użyj faktycznego źródła: usersData
console.log(`-- Users Info -- 
All user names: ${usersData.map((user) => user.name.split(" ")[0]).join(", ")}
User shortest website name: ${
  usersData.reduce((acc, user) => {
    if (acc.website.length < user.website.length) {
      return acc;
    } else {
      return user;
    }
  }).website
}
`);
