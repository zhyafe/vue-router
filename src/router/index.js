import VueRouter from "vue-router";
import HomeScreen from "../pages/HomeScreen";
import DynamicScreen from "../pages/dynamicRoute/DynamicScreen";
import NotFoundScreen from "../pages/dynamicRoute/NotFoundScreen";
import NestScreen from "../pages/nestRoute/NestScreen";
import NestDefaultScreen from "../pages/nestRoute/NestDefaultScreen";
import NestTeacherScreen from "../pages/nestRoute/NestTeacherScreen";
import NestStudentScreen from "../pages/nestRoute/NestStudentScreen";
const routes = [
  { path: "/", component: HomeScreen },
  { path: "/dynamic/:id", component: DynamicScreen },
  {
    path: "/nest",
    component: NestScreen,
    children: [
      {
        path: "",
        component: NestDefaultScreen,
      },
      {
        path: "teacher",
        component: NestTeacherScreen,
      },
      {
        path: "student",
        component: NestStudentScreen,
      },
    ],
  },
  { path: "*", component: NotFoundScreen },
];

const Router = new VueRouter({
  mode: "hash",
  routes,
});

export default Router;
