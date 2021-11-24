"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _Home = _interopRequireDefault(require("./components/Home.vue"));

var _Login = _interopRequireDefault(require("./components/Login.vue"));

var _Register = _interopRequireDefault(require("./components/Register.vue"));

var _token = _interopRequireDefault(require("./services/token.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// lazy-loaded
var Profile = function Profile() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./components/Profile.vue"));
  });
};

var BoardAdmin = function BoardAdmin() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./components/BoardAdmin.vue"));
  });
};

var BoardModerator = function BoardModerator() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./components/BoardModerator.vue"));
  });
};

var BoardUser = function BoardUser() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./components/BoardUser.vue"));
  });
};

var routes = [{
  path: "/Groupomania-app/",
  name: "home",
  component: _Home["default"]
}, {
  path: "/Groupomania-app/home",
  component: _Home["default"]
}, {
  path: "/Groupomania-app/login",
  component: _Login["default"]
}, {
  path: "/Groupomania-app/register",
  component: _Register["default"]
}, {
  path: "/Groupomania-app/profile",
  name: "profile",
  // lazy-loaded
  component: Profile
}, {
  path: "/Groupomania-app/admin",
  name: "admin",
  // lazy-loaded
  component: BoardAdmin
}, {
  path: "/Groupomania-app/mod",
  name: "moderator",
  // lazy-loaded
  component: BoardModerator
}, {
  path: "/Groupomania-app/forum",
  name: "forum",
  // lazy-loaded
  component: BoardUser
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(),
  routes: routes
});
router.beforeEach(function (to, from, next) {
  var publicPages = ['/Groupomania-app/login', '/Groupomania-app/register', '/Groupomania-app/home', '/Groupomania-app/'];
  var authRequired = !publicPages.includes(to.path);
  var loggedIn = localStorage.getItem('user'); // trying to access a restricted page + not logged in
  // redirect to login page

  if (authRequired && !loggedIn) {
    _token["default"].removeUser();

    next('/Groupomania-app/home');
  } else {
    _token["default"].getLocalRefreshToken();

    next();
  }
});
var _default = router;
exports["default"] = _default;