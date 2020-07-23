"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _ui = require("@yosmy/ui");

var _phone = require("@yosmy/phone");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Presentation = (0, _react.memo)(function (_ref) {
  var ui = _ref.ui,
      margin = _ref.margin,
      padding = _ref.padding,
      border = _ref.border,
      country = _ref.country,
      prefix = _ref.prefix,
      number = _ref.number,
      nickname = _ref.nickname,
      picture = _ref.picture,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["ui", "margin", "padding", "border", "country", "prefix", "number", "nickname", "picture", "onClick"]);

  return /*#__PURE__*/_react["default"].createElement(_ui.Container, _extends({}, props, {
    // key
    flow: "row",
    align: {
      main: "flex-start",
      cross: "center"
    },
    margin: margin,
    padding: padding,
    border: border,
    onClick: country !== null && prefix !== null && number !== null && nickname !== null && onClick ? function () {
      onClick(country, prefix, number, nickname, picture);
    } : undefined
  }), picture === null ? /*#__PURE__*/_react["default"].createElement(_ui.CirclePlaceholder, {
    size: 35
  }) : /*#__PURE__*/_react["default"].createElement(ui.picture, {
    size: "sm",
    rounded: true,
    source: picture
  }), /*#__PURE__*/_react["default"].createElement(_ui.Container, {
    flow: "column",
    align: {
      main: "center",
      cross: "flex-start"
    },
    margin: {
      left: 1
    }
  }, nickname === null ? /*#__PURE__*/_react["default"].createElement(_ui.LinePlaceholder, {
    width: 100,
    height: 14,
    margin: {
      bottom: 0.5
    }
  }) : nickname !== false ? /*#__PURE__*/_react["default"].createElement(_ui.Text, null, nickname) : /*#__PURE__*/_react["default"].createElement(_ui.Text, null, "Sin nombre"), country === null || prefix === null || number === null ? /*#__PURE__*/_react["default"].createElement(_phone.PhonePlaceholder, null) : /*#__PURE__*/_react["default"].createElement(_phone.Phone, {
    country: country,
    prefix: prefix,
    number: number
  })));
}, function (prev, next) {
  return prev.country === next.country && prev.prefix === next.prefix && prev.number === next.number && prev.nickname === next.nickname && prev.picture === next.picture;
});
Presentation.propTypes = _objectSpread({
  ui: _propTypes["default"].shape({
    picture: _propTypes["default"].func.isRequired
  }).isRequired,
  country: _propTypes["default"].string,
  prefix: _propTypes["default"].string,
  number: _propTypes["default"].string,
  nickname: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].oneOf([false])]),
  picture: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].oneOf([false])])
}, _primitiveUiSpec.Container.Props);
var _default = Presentation;
exports["default"] = _default;