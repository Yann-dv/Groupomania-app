"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

require("bootstrap");

require("bootstrap/dist/css/bootstrap.min.css");

var _fontAwesome = require("./plugins/font-awesome");

var _setupInterceptors = _interopRequireDefault(require("./services/setupInterceptors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _setupInterceptors["default"])(_store["default"]);
(0, _vue.createApp)(_App["default"]).use(_router["default"]).use(_store["default"]).component("font-awesome-icon", _fontAwesome.FontAwesomeIcon).mount("#app");