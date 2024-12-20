import {
  createWebHashHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";
import NotFound from "@/views/notFound/NotFound.vue";
import Login from "@/views/login/Login.vue";
import HomePage from "@/views/homePage/HomePage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/homePage",
  },
  // {
  //   path: "/homePage",
  //   component: HomePage,
  // },
  {
    path: "/login",
    component: Login,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
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
