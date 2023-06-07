import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import LoginPage from "../views/LoginPage.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: LoginPage,

    beforeEnter: (_to, _from, next) => {
      const token = localStorage.getItem("token");
      if (token) {
        next("/home");
      } else {
        next();
      }
    },
  },

  {
    path: "/login",
    component: LoginPage,
    beforeEnter: (_to, _from, next) => {
      const token = localStorage.getItem("token");
      if (token) {
        next("/home");
      } else {
        next();
      }
    },
  },
  {
    path: "/home",
    component: Home,
    beforeEnter: (_to, _from, next) => {
      const token = localStorage.getItem("token");
      if (token) {
        next();
      } else {
        next("/");
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
