<template>
  <div>
    <p>路由参数</p>
  </div>
</template>

<script>
export default {
  props: ["name"],
  mounted() {
    console.log("routerParams", this.name, this.$route);
  },
};
</script>

<style></style>
