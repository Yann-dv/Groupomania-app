import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import TokenService from "./services/token.service";
// lazy-loaded
const Profile = () => import("./components/Profile.vue")
const BoardAdmin = () => import("./components/BoardAdmin.vue")
const BoardModerator = () => import("./components/BoardModerator.vue")
const BoardUser = () => import("./components/BoardUser.vue")

const routes = [
  {
    path: "/Groupomania-app/",
    name: "home",
    component: Home
  },
  {
    path: "/Groupomania-app/home",
    component: Home
  },
  {
    path: "/Groupomania-app/login",
    component: Login,
  },
  {
    path: "/Groupomania-app/register",
    component: Register,
  },
  {
    path: "/Groupomania-app/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/Groupomania-app/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: "/Groupomania-app/mod",
    name: "moderator",
    // lazy-loaded
    component: BoardModerator,
  },
  {
    path: "/Groupomania-app/forum",
    name: "forum",
    // lazy-loaded
    component: BoardUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/Groupomania-app/login', '/Groupomania-app/register', '/Groupomania-app/home', '/Groupomania-app/'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
  
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
      TokenService.removeUser();
      next('/Groupomania-app/home');
    }
     else {
      TokenService.getLocalRefreshToken();
      next();
    }
  });

export default router;