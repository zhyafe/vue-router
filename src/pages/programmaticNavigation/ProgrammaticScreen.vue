<template>
  <div>
    <p>programmatic</p>
    <button @click="dynamicPush">api 跳转至动态路由</button><br />
    <router-link to="/dynamic/1">link跳转至动态路由</router-link>
    <p>---------------</p>
    <button @click="dynamicReplace">api replace至动态路由</button><br />
    <router-link to="/dynamic/1" replace>link replace至动态路由</router-link>
    <p>---------------</p>
    <button @click="dynamicGo">api go至动态路由</button><br />
  </div>
</template>

<script>
export default {
  methods: {
    dynamicPush() {
      //   this.$router.push("/dynamic/3?name=xx"); // 字符串
      //   this.$router.push({   // 对象 提供path params忽略
      //     path: "/dynamic/3?name=xx",
      //   });
      //   this.$router.push({
      //     // name
      //     name: "dynamic",
      //     params: { userId: "123" },
      //   });
    },
    dynamicReplace() {
      this.$router.replace("/dynamic/3?name=xx"); // 字符串
      //   this.$router.replace({
      //     // 对象 提供path params忽略
      //     path: "/dynamic/3?name=xx",
      //   });
      //   this.$router.replace({
      //     // name
      //     name: "dynamic",
      //     params: { userId: "123" },
      //   });
    },
    dynamicGo() {
      this.$router.go("-1");
    },
  },
};
</script>

<style></style>
