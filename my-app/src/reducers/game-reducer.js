import {
  GAME_MODE,
  UP_LEVEL,
} from '../actions/actions-types';

const initialState = {
  gameMode: false,
  level: 0,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_MODE:
      return {
        ...state,
        gameMode: true,
      };
    case UP_LEVEL:
      return {
        ...state,
        level: action.payload,
      };
    default:
      return state;
  }
};

export default gameReducer;
