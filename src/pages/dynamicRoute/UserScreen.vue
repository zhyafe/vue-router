<template>
  <div>
    <p>user screen {{ this.$route.params.id }}</p>
    <router-link :to="'/user/' + id">user</router-link>
    <button @click="changeId">修改id</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: Date.now(),
    };
  },
  watch: {
    $route() {
      console.log("----watch");
    },
  },
  methods: {
    changeId() {
      this.id = Date.now();
    },
  },
};
</script>

<style></style>
