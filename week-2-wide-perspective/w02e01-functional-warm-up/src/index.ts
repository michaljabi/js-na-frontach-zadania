import {randomAlbumData} from "./data-store/music-album.js"
import {fruitsData} from "./data-store/fruits";
import {AlbumDataType, FruitsData, UserData} from "./type";
import {usersData} from "./data-store/users";


export const getAlbumData =<T extends AlbumDataType >(album: T )=> {
    const genresName = album.genres[0].name
    const artistName = album.artist.name
    const tracksLength  = album.tracks.length
    const totalAlbumDuration = album.tracks.reduce(((currentValue,track)=>currentValue + Number(track.duration) ),0)
    const ShortestTrack = album.tracks.sort((a,b)=> Number(a.duration) - Number(b.duration))[0]

 return `
 genresName: ${genresName}
  artistName: ${artistName}
  tracksLength:(${tracksLength})
   ShortestTrack - ${ShortestTrack.title}
   totalAlbumDuration: ${totalAlbumDuration}`
}


export const getFruitData =<T extends FruitsData[]> (data: T) => {
    const allFruitsFamily =  [...new Set(data.map(({family})=>  family ? family: null).filter(((item)=> item !== null)))]
    const allFruitsStartsWithG = data.filter((({name})=> name.startsWith("G") && name)).map((({name})=> name))
    const lowesCalories = data.sort(((A,B)=>  A.nutritions.calories - B.nutritions.calories)).map((({name,nutritions: {calories}})=> {
        return {
            name,
            calories
        }
    }))[0]
    return `
     allFruitsFamily: ${allFruitsFamily}
     allFruitsStartsWithG: ${allFruitsStartsWithG}
     lowesCalories: fruitName: ${lowesCalories.name}, calories: ${lowesCalories.calories} kcal
    `

}


export const getUserData = <T extends  UserData[]> (data: T, id?: UserData["id"]) => {
const allUserNames = data.map((({name})=> name))
    const allUserNameString = `allUserNames: ${allUserNames}`
    if(!id) return allUserNameString
    const websiteName = data[id].website
    const userShortestWebsitename = websiteName.includes("@") ? websiteName.split("@")[1] : websiteName
return `
${allUserNameString}
userShortestWebsitename: ${userShortestWebsitename}
`
}




const albumData =getAlbumData(randomAlbumData)
console.log("albumData",albumData)

const fruitData = getFruitData(fruitsData)
console.log("fruitData",fruitData)

const userData = getUserData(usersData,4)
console.log("userData",userData)