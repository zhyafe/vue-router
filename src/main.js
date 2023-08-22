import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Nest from "./views/1nest/Nest.vue";
import NestDefault from "./views/1nest/NestDefault.vue";
import TeacherView from "./views/1nest/NestTeacher.vue";
import TeacherViewSon1 from "./views/1nest/NestTeacherSon1.vue";
import StudentView from "./views/1nest/NestStudent.vue";
import Guard from "./views/3guard/Guard.vue";
import GuardList from "./views/3guard/GuardList.vue";
import GuardDetail from "./views/3guard/GuardDetail.vue";

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
// const routes = [
//   {
//     path: "/nest",
//     component: Nest,
//     name: "nest",
//     children: [
//       {
//         path: "",
//         name: "aa",
//         component: NestDefault,
//       },
//       {
//         path: "teacher",
//         component: TeacherView,
//         children: [
//           {
//             path: "t1",
//             component: TeacherViewSon1,
//           },
//         ],
//       },
//       {
//         path: "student",
//         component: StudentView,
//       },
//     ],
//   },
//   { path: "/", component: Home },

//   {
//     path: "/guard",
//     component: Guard,
//     children: [
//       {
//         path: "list",
//         component: GuardList,
//       },
//       {
//         path: "detail",
//         component: GuardDetail,
//       },
//     ],
//   },
//   { path: "/about", name: "about", component: About },
// ];

const routes = [
  {
    path: "/layouta",
    component: () => import("./views/4layout/index.vue"),
  },
  {
    path: "/layoutb",
    component: () => import("./views/4layout/index.vue"),
  },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  console.log("[🚀] ~ next", next);
  console.log("路由守卫： beforeEach");
  console.log("[🚀] ~ from", from);
  console.log("[🚀] ~ to", to);
  if (to.path === "/guard/detail") {
    // return  { path: "/nest" };
    router.push({
      name: "about",
    });
    return "";
    // return { name: "about" };
  }
  if (to.path === "/") {
    // return;
  }
  next(); // vue-router3 跳转的方式
  // return false; // return false 取消跳转
});

router.beforeEach((to, from) => {
  console.log("demo", to);
});

router.afterEach((to, from, next) => {
  console.log("[🚀] ~ next", next);
  console.log("路由守卫： afterEachEach");
  console.log("[🚀] ~ from", from);
  console.log("[🚀] ~ to", to);
  // next();
});

const app = createApp(App);
app.use(router);
app.mount("#app");
