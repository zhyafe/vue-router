<template>
  <div>
    <div>home</div>
    <div @click="handleLogout">logout</div>
  </div>
</template>

<script setup lang="ts">
const handleLogout = () => {
  localStorage.removeItem("token");
};
</script>

<style scoped lang="less"></style>
