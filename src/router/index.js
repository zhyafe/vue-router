import VueRouter from "vue-router";
import HomeScreen from "../pages/HomeScreen";
import Setting from "../pages/SettingScreen";
const routes = [
  { path: "/", component: HomeScreen },
  { path: "/bar", component: Setting },
];

const Router = new VueRouter({
  mode: "hash",
  routes,
});

export default Router;
