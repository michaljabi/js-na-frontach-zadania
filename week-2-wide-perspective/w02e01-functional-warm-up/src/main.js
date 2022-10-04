import { usersData } from './data-store/users.js'
import { fruitsData } from './data-store/fruits.js'
import { randomAlbumData } from './data-store/music-album.js'

// Do wyliczenia danych poniżej użyj faktycznego źródła: randomAlbumData

const displayAlbumData = ({ title, artist, tracks }) => {

    const albumDuration = tracks.reduce((total, track) => total + Number(track.duration), 0)
    const shortestTrack = tracks.sort((track1, track2) => Number(track1.duration) - Number(track2.duration))[0].title
    
console.log(`-- Album Info -- 
    Name: ${title}
    Artist: ${artist.name}
    Number of tracks: ${tracks.length}
    Total album duration: ${albumDuration}
    Shortest track: "${shortestTrack}"
`)
}


const displayFruitsInfo = (fruitsData) => {

    const AllFruitFamilies = getAllUniqueNames(fruitsData, 'family')
    const fruitsStartWith = (letter) => fruitsData.filter(f => f.name.toLowerCase().startsWith(letter)).map(f => f.name).join(', ');
    const lowerCaloriesFruit = fruitsData.sort((f1, f2) => f1.nutritions.calories - f2.nutritions.calories)[0]

    console.log(`-- Fruits Info -- 
    All fruit families: ${AllFruitFamilies}
    All fruit starts with "g": ${fruitsStartWith('g')}
    Lowest calories: '${lowerCaloriesFruit.name}, ${lowerCaloriesFruit.nutritions.calories} calories'}
    `)
}

const displayUserInfo = (usersData) => {

    const allUserNames = getAllUniqueNames(usersData, 'name', 'length')
    const userShortestWebsiteName = usersData.sort((user1, user2) => user1.website.length - user2.website.length)[0].website
    console.log(`-- Users Info -- 
    All user names: ${allUserNames}
    User shortest website name: ${userShortestWebsiteName}

    `)
}

const getAllUniqueNames = (data, nameOfUniquePropery) => Array.from(new Set(data.map(object => object[nameOfUniquePropery]))).join(', ')


displayUserInfo(usersData)
displayFruitsInfo(fruitsData)
displayAlbumData(randomAlbumData)

//tutaj byla proba stworzenia bardziej uniwersalnej funkcji ale juz szkoda mi bylo czasu na grzebanie w zad 1 
//z drugiego tygodnia tymbardzej ze juz troche w plecy z materialem jestem
function getFirstSortedArrayItemByCondition(data, ...objectPropetyPath) {

    const result = data.sort((a, b) => getPropertyFromItemObjectPath(a, objectPropetyPath) - getPropertyFromItemObjectPath(b, objectPropetyPath))

    return getPropertyFromItemObjectPath[result[0]]

}


const getPropertyFromItemObjectPath = (singleUser, ...objPath) => {
    let result = singleUser
    for (let i = 0; i < objPath.length; i++) {
        result = result[objPath[i]];
    }
    console.log(result);
    return result
}

