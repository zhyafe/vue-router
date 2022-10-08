<template>
  <div>
    <p>nest</p>
    <div class="nest">
      <div class="nest__lef">
        <router-link to="/nest/teacher">teacher</router-link>
        <router-link to="/nest/student">student</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nest {
  display: flex;
}
</style>
