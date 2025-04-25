import { Router } from "vue-router";

const demofn = () => {
  return Promise.reject('');
};

const permissionGuard = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    await demofn();
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
      next();
      return true;
    }

    /**
     * 登录判断 无token
     */
    if (!localStorage.getItem("token")) {
      next({ path: "login" });
      // return { name: "login", replace: true };
    }

    /**
     * 判断是否初始化
     *  -如果已经初始化 返回true
     *  -如果未初始化 执行初始化逻辑：获取用户信息；获取路由信息，添加路由；
     */

    /**
     * 页面的跳转，如果跳转的是notfound（可能访问的是接口中的路由），判断to.path是否在接口返回的路由数据中，
     * -如果在重定向到改path
     * -如果不在，执行next()访问notFound页面
     */
    let isBackServerPath = false;
    if (to.name == "NotFound" && isBackServerPath) {
      next({ path: to.fullPath, replace: true });
    } else {
      next();
    }
  });
};

export default permissionGuard;
