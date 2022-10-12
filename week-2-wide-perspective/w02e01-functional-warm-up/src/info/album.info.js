import { getByProperty, getLength, sumValueByProperty, getObjectTheSmallestValueByProperty } from '../helpers.js';
import { randomAlbumData } from '../data-store/music-album.js';

export const nameOfAlbum = getByProperty(randomAlbumData, 'title');
export const artistNameOfAlbum = getByProperty(randomAlbumData, 'artist', 'name');
export const numberOfTracksOnTheAlbum = getLength(getByProperty(randomAlbumData, 'tracks')); // alternatywa getByProperty(randomAlbumData, 'tracks', 'length')
export const totalAlbumDuration = sumValueByProperty(randomAlbumData.tracks, 'duration');
export const shortestTrack = getByProperty(getObjectTheSmallestValueByProperty(randomAlbumData.tracks, 'duration'), 'title');
