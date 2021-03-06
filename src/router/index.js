import VueRouter from "vue-router";
import HomeScreen from "../pages/HomeScreen";
import DynamicScreen from "../pages/dynamicRoute/DynamicScreen";
import NotFoundScreen from "../pages/dynamicRoute/NotFoundScreen";
import NestScreen from "../pages/nestRoute/NestScreen";
import NestDefaultScreen from "../pages/nestRoute/NestDefaultScreen";
import NestTeacherScreen from "../pages/nestRoute/NestTeacherScreen";
import NestStudentScreen from "../pages/nestRoute/NestStudentScreen";
import ProgrammaticScreen from "../pages/programmaticNavigation/ProgrammaticScreen";
import NameViewScreen from "../pages/nameView/NameViewScreen";
import NameViewLeftScreen from "../pages/nameView/NameViewLeftScreen";
import NameViewRightScreen from "../pages/nameView/NameViewRightScreen";
import RedirectScreen from "../pages/redirect/RedirectScreen";
import RouterParamsScreen from "../pages/routerParams/RouterParamsScreen";
import RouterGuard from "../pages/routerGuard/GuardScreen";
import LoginScreen from "../pages/auth/LoginScreen";
const routes = [
  {
    path: "/",
    component: HomeScreen,
    // beforeEnter: function(to, from, next) {
    //   let token = localStorage.getItem("token");
    //   if (!token && !to.fullPath.includes("login")) {
    //     next("/login");
    //   } else {
    //     next();
    //   }
    // },
  },
  { path: "/login", component: LoginScreen },
  { path: "/dynamic/:id", component: DynamicScreen, name: "dynamic" },
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
  {
    path: "/programmatic",
    component: ProgrammaticScreen,
  },
  {
    path: "/nameview",
    components: {
      default: NameViewScreen,
      nameViewLeft: NameViewLeftScreen,
      nameViewRight: NameViewRightScreen,
    },
  },
  {
    path: "/redirect",
    component: RedirectScreen,
  },
  {
    path: "/gotoredirect",
    redirect: "/redirect",
  },
  {
    path: "/routerparams",
    component: RouterParamsScreen,
    props: {
      name: "zyf",
    },
  },
  { path: "/routerGuard", component: RouterGuard },
  { path: "*", component: NotFoundScreen },
];

const Router = new VueRouter({
  mode: "hash",
  routes,
});

// Router.beforeEach((to, from, next) => {
//   console.log("--------", to, from, next);
//   let token = localStorage.getItem("token");
//   if (!token && !to.fullPath.includes("login")) {
//     next("/login");
//   } else {
//     next();
//   }
// });

export default Router;
