import VueRouter from "vue-router";
import HomeScreen from "../pages/HomeScreen";
import UserScreen from "../pages/dynamicRoute/UserScreen";
import NotFoundScreen from "../pages/dynamicRoute/NotFoundScreen";
const routes = [
  { path: "/", component: HomeScreen },
  { path: "/user/:id", component: UserScreen },
  { path: "*", component: NotFoundScreen },
];

const Router = new VueRouter({
  mode: "hash",
  routes,
});

export default Router;
