<template>
  <div>
    <p>home</p>
    <router-link to="/dynamic/1">动态路由</router-link><br />
    <router-link to="/nest">嵌套路由</router-link><br />
    <router-link to="/programmatic">编程导航</router-link><br />
    <router-link to="/nameview">名字视图</router-link><br />
    <router-link to="/gotoredirect">重定向路由</router-link><br />
    <router-link to="/routerparams">路由传参</router-link><br />
    <p>-----------------------------</p>
    <router-link to="/routerGuard">路由守卫</router-link><br />

    <button @click="clearLocalStorage">清除缓存</button>
  </div>
</template>

<script>
export default {
  methods: {
    clearLocalStorage() {
      localStorage.clear();
    },
  },
};
</script>

<style></style>
