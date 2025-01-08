import { Router } from "vue-router";

const permissionGuard = (router: Router) => {
  router.beforeEach((to, from) => {
    console.log("🚀 ~ from:", from);
    console.log("🚀 ~ to:", to);

    //白名单,无需鉴权页面
    if (["login"].includes(to.name)) {
      return true;
    }

    // 登录判断
    if (!localStorage.getItem("token")) {
      return { path: "/login" };
    }

    if (to.name == "user") {
      // 返回 false 以取消导航
      return false;
    }
  });
};

export default permissionGuard;
