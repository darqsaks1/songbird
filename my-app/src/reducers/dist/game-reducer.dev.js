"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actionsTypes = require("../actions/actions-types");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  gameMode: true,
  level: 0,
  bird: 4,
  about: true,
  score: 0,
  roundScore: 5,
  errors: 0,
  win: false,
  audio: false
};

var gameReducer = function gameReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionsTypes.GAME_MODE:
      return _objectSpread({}, state, {
        gameMode: true
      });

    case _actionsTypes.OFF_GAME:
      return _objectSpread({}, state, {
        gameMode: false
      });

    case _actionsTypes.UP_LEVEL:
      return _objectSpread({}, state, {
        level: action.payload
      });

    case _actionsTypes.GET_BIRD:
      return _objectSpread({}, state, {
        bird: action.payload
      });

    case _actionsTypes.HIDE_ABOUT:
      return _objectSpread({}, state, {
        about: false
      });

    case _actionsTypes.OPEN_ABOUT:
      return _objectSpread({}, state, {
        about: true
      });

    case _actionsTypes.GET_SCORE:
      return _objectSpread({}, state, {
        score: action.payload
      });

    case _actionsTypes.SET_ERRORS:
      return _objectSpread({}, state, {
        errors: action.payload
      });

    case _actionsTypes.SET_WIN:
      return _objectSpread({}, state, {
        win: true
      });

    case _actionsTypes.SET_TO_WIN:
      return _objectSpread({}, state, {
        win: false
      });

    case _actionsTypes.SET_AUDIO:
      return _objectSpread({}, state, {
        audio: true
      });

    case _actionsTypes.SET_AUDIO_TO_FALSE:
      return _objectSpread({}, state, {
        audio: false
      });

    default:
      return state;
  }
};

var _default = gameReducer;
exports["default"] = _default;