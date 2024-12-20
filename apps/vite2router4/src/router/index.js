import { createWebHashHistory, createRouter } from "vue-router";
import Login from "../views/login/index.vue";

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  console.log("[🚀] ~ from", from);
  console.log("[🚀] ~ to", to);
  // if (to.path === "/guard/detail") {
  //   // return  { path: "/nest" };
  //   router.push({
  //     name: "about",
  //   });
  //   return "";
  //   // return { name: "about" };
  // }
  // if (to.path === "/") {
  //   // return;
  // }
  next(); // vue-router3 跳转的方式
});

export default router;
