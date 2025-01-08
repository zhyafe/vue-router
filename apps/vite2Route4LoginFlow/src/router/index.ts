import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home/Home.vue";
import User from "../views/user/User.vue";
import Login from "../views/login/Login.vue";
import permissionGuard from "./guard/permissionGuard";

let routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/user",
    name: "user",
    component: User,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

permissionGuard(router);

export default router;
