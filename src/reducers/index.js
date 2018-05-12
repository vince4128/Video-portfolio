import { combineReducers } from 'redux';
import videoReducer from './videoReducer';
import categorieReducer from './categorieReducer';

const rootReducer = combineReducers({
    videos: videoReducer,
    categories: categorieReducer
});

export default rootReducer;