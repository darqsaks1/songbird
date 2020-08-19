import {
  GAME_MODE,
  UP_LEVEL,
  GET_BIRD,
  HIDE_ABOUT,
  OPEN_ABOUT,
  OFF_GAME,
  SET_ERRORS,
  SET_SCORE,
  SET_WIN,
  SET_TO_WIN,
  GET_SCORE
} from '../actions/actions-types';

const initialState = {
  gameMode: true,
  level: 0,
  bird: 4,
  about: true,
  score: 0,
  roundScore: 5,
  errors: 0,
  win: false,
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
    case  GET_SCORE: 
    return {
      ...state,
      score: action.payload,
    };
    case  SET_ERRORS: 
    return {
      ...state,
      errors: action.payload,
    };
    case  SET_WIN: 
    return {
      ...state,
      win: true,
    };
    case  SET_TO_WIN: 
    return {
      ...state,
      win: false,
    };
    default:
      return state;
  }
};

export default gameReducer;
