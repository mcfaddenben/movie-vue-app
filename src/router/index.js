import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MoviesIndex from "../views/Index.vue";
import CreateMovie from "../views/Create.vue";
import ShowMovie from "../views/Show.vue";
import EditMovie from "../views/Edit.vue";
import Logout from "../views/Logout.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Index",
    name: "movies-index",
    component: MoviesIndex,
  },
  {
    path: "/Create",
    name: "create-movie",
    component: CreateMovie,
  },
  {
    path: "/Show",
    name: "show-movie",
    component: ShowMovie,
  },
  {
    path: "/Edit",
    name: "edit-movie",
    component: EditMovie,
  },
  {
    path: "/Logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/Login",
    name: "login",
    component: Login,
  },
  {
    path: "/Signup",
    name: "signup",
    component: Signup,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
