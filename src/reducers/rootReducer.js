import {combineReducers} from 'redux';
import games from './gameReducer';

const rootReducer = combineReducers({
  //shorthand prop names, can also do games: games
  games
})

export default rootReducer;
