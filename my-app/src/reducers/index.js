import { combineReducers } from 'redux';
import gameReducer from './game-reducer'
import liReducer from './li-reducer'

const rootReducer = combineReducers({
  game: gameReducer,
  li: liReducer,
});

export default rootReducer;
