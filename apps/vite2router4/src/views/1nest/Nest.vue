<template>
  <div>
    <p>nest</p>
    <router-link :to="{ name: 'nest', params: {} }"> nest </router-link>
    <div class="nest">
      <div class="nest__lef">
        <router-link to="/nest/teacher">teacher</router-link>
        <router-link to="/nest/student">student</router-link>
      </div>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import lifeCycle from "@/hooks/lifeCycle";

lifeCycle("nest");
</script>

<style>
.nest {
  display: flex;
}
</style>
