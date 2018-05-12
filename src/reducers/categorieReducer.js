import _ from 'lodash';
//importer les actions
import { FETCH_CATEGORIES } from '../actions';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_CATEGORIES:
        console.log("FETCH_CATEGORIES lancé depuis categorieReducer !");
        const categories = _.mapKeys(action.payload.data, "id");
        //return _.unionBy(state, action.payload.data, "id");
        return {...state, ...categories};
        break;

        default: return state;
    }
}