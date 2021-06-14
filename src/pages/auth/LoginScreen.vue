<template>
  <div>
    <p>登录界面</p>
    <button @click="onLogin">登录按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    onLogin() {
      localStorage.setItem("token", "123");
      this.$router.replace("/");
    },
  },
};
</script>

<style></style>
