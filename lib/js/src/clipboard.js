// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var ReactNative = require("react-native");

function getString() {
  return ReactNative.Clipboard.getString();
}

function setString(prim) {
  ReactNative.Clipboard.setString(prim);
  return /* () */0;
}

exports.getString = getString;
exports.setString = setString;
/* react-native Not a pure module */