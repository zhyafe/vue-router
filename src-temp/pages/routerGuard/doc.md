## 路由守卫

> 通过跳转或取消的方式守卫导航 （钩子）（拦截器）

- 全局
- 单个路由
- 组件及的

### 全局守卫

```js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})

```

### 单个路由

再路由配置项中添加 beforeEnter 配置

### 组件级配置

组件配置选项添加 beforeRouteEnter
