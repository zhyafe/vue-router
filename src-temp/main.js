import Vue from "vue/dist/vue.js";
import VueRouter from "vue-router";
import App from "./App.vue";
import router from "./router/index.js";
Vue.use(VueRouter);

Vue.mixin({
  mounted() {
    console.log("[route]", this.$route);
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
