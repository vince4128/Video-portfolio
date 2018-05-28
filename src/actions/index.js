import axios from 'axios';

export const FETCH_VIDEOS = "fetch_videos";
export const FETCH_CATEGORIES = "fetch_categories";
export const FETCH_CATEGORIE = "fetch_categorie";

//const ROOT_URL = 'http://127.0.0.1/VIDEOADMIN/public/index.php?p=api.';
const ROOT_URL = 'http://www.larsblumers.com/admin/public/index.php?p=api.';

export function fetchVideos(callback){

    const request = axios.get(`${ROOT_URL}videos.index`);

    request.then((r)=>{
        callback(r);
    })

    return {
        type: FETCH_VIDEOS,
        payload: request
    }
}

export function fetchCategories(callback){

    const request = axios.get(`${ROOT_URL}categories.index`);

    request.then((r)=>{
        callback();
    })

    return {
        type: FETCH_CATEGORIES,
        payload: request
    }

}