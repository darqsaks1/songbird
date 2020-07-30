import {
  GAME_MODE,
  UP_LEVEL,
  GET_BIRD,
  HIDE_ABOUT,
  OPEN_ABOUT,
  OFF_GAME,
} from '../actions/actions-types';

const initialState = {
  gameMode: true,
  level: 0,
  bird: 4,
  about: true,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_MODE:
      return {
        ...state,
        gameMode: true,
      };
      case  OFF_GAME: 
      return {
        ...state,
        gameMode: false,
      };
    case UP_LEVEL:
      return {
        ...state,
        level: action.payload,
      };
    case  GET_BIRD: 
    return {
      ...state,
      bird: action.payload,
    };
    case  HIDE_ABOUT: 
    return {
      ...state,
      about: false,
    };
    case  OPEN_ABOUT: 
    return {
      ...state,
      about: true,
    };
    default:
      return state;
  }
};

export default gameReducer;
