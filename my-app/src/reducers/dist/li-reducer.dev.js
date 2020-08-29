

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actionsTypes = require("../actions/actions-types");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  li_first: null,
  li_second: null,
  li_third: null,
  li_four: null,
  li_five: null,
  li_six: null
};

var liReducer = function liReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionsTypes.SET_TO_1:
      return _objectSpread({}, state, {
        li_first: true
      });

    case _actionsTypes.SET_TO_2:
      return _objectSpread({}, state, {
        li_second: true
      });

    case _actionsTypes.SET_TO_3:
      return _objectSpread({}, state, {
        li_third: true
      });

    case _actionsTypes.SET_TO_4:
      return _objectSpread({}, state, {
        li_four: true
      });

    case _actionsTypes.SET_TO_5:
      return _objectSpread({}, state, {
        li_five: true
      });

    case _actionsTypes.SET_TO_6:
      return _objectSpread({}, state, {
        li_six: true
      });

    case _actionsTypes.SET_TO_1_FALSE:
      return _objectSpread({}, state, {
        li_first: false
      });

    case _actionsTypes.SET_TO_2_FALSE:
      return _objectSpread({}, state, {
        li_second: false
      });

    case _actionsTypes.SET_TO_3_FALSE:
      return _objectSpread({}, state, {
        li_third: false
      });

    case _actionsTypes.SET_TO_4_FALSE:
      return _objectSpread({}, state, {
        li_four: false
      });

    case _actionsTypes.SET_TO_5_FALSE:
      return _objectSpread({}, state, {
        li_five: false
      });

    case _actionsTypes.SET_TO_6_FALSE:
      return _objectSpread({}, state, {
        li_six: false
      });

    case _actionsTypes.SET_TO_NULL:
      return _objectSpread({}, state, {
        li_first: null,
        li_second: null,
        li_third: null,
        li_four: null,
        li_five: null,
        li_six: null
      });

    default:
      return state;
  }
};

var _default = liReducer;
exports["default"] = _default;