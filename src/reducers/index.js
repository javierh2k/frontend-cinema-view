import { combineReducers } from 'redux';
import MovieReducer from './movies';

const reducers = {
  movieStore: MovieReducer,
}

const rootReducer = combineReducers(reducers);

export default rootReducer;