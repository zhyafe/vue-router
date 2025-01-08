<template>
  <div>
    <div @click="handleLogin">login</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const handleLogin = () => {
  localStorage.setItem("token", "zyf");
  router.replace({
    name: "home",
  });
};
</script>

<style scoped lang="less"></style>
