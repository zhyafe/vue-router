<template>
  <div>
    <p>header</p>
    <div>
      <span>sider</span>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import lifeCycle from "@/hooks/lifeCycle.js";
lifeCycle("layout");
</script>

<style></style>
