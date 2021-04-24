import { parseSongs, parseCollection } from "./utils";
import { jioSaavnSearch, getJioSaavnPlaylist } from './service';

export async function searchJioSaavnMusic(query: string) {
    try {
        const data = await jioSaavnSearch(query);
        const songs = await parseSongs(data);
        return songs;
    } catch (error) {
        console.log("searchJioSaavnMusic: ", error)
    }
}

export async function getJioSaavnMusic() {
    const data = await getJioSaavnPlaylist();
    const songs = await parseCollection(data);
    return songs;
}