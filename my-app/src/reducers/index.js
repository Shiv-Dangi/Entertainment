import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { movieData } from './Home.js'

const rootReducer = combineReducers({
  routing: routerReducer,
  movieData
});

export default rootReducer;
