<template>
  <div>
    <router-link :to="{ name: 'nest', params: {} }"> nest </router-link>
    <RouterView />
  </div>
</template>

<script setup>
// import RouterView from "vue-router";
</script>

<style scoped></style>
