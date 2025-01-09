import { Router } from "vue-router";

const permissionGuard = (router: Router) => {
  router.beforeEach((to, from) => {
    console.log("🚀 ~ from:", from);
    console.log("🚀 ~ to:", to);

    /**
     * 三方登录判断 获取链接的token
     * -存在token：执行登录；初始化（获取用户信息；添加路由；） 跳转
     */

    /**
     * 白名单判断,无需鉴权页面
     */
    if (["login"].includes(to.name)) {
      return true;
    }

    /**
     * 登录判断 无token
     */
    if (!localStorage.getItem("token")) {
      return { name: "login", replace: true };
    }

    /**
     * 判断是否初始化
     *  -如果已经初始化 返回true
     *  -如果未初始化 执行初始化逻辑：获取用户信息；获取路由信息，添加路由；
     */
  });
};

export default permissionGuard;
