//importer les actions
import { FETCH_VIDEOS } from '../actions';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_VIDEOS:
        console.log("FETCH_VIDEOS lancé depuis videoReducer !");
        const videos = _.mapKeys(action.payload.data, "id");
        return {...state, ...videos};
        break;

        default: return state;
    }
}