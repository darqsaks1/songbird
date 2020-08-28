"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var mathRandom = function mathRandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

var _default = mathRandom;
exports["default"] = _default;