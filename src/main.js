import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/Home.vue";
import Nest from "./views/1nestRoute/Nest.vue";
import NestDefault from "./views/1nestRoute/NestDefault.vue";
import TeacherView from "./views/1nestRoute/NestTeacher.vue";
import StudentView from "./views/1nestRoute/NestStudent.vue";
import About from "./components/About.vue";

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: "", component: Home },
  {
    path: "/nest",
    component: Nest,
    name: "nest",
    children: [
      {
        path: "",
        component: NestDefault,
      },
      {
        path: "teacher",
        component: TeacherView,
      },
      {
        path: "student",
        component: StudentView,
      },
    ],
  },
  { path: "/about", component: About },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

const app = createApp(App);
app.use(router);
app.mount("#app");
