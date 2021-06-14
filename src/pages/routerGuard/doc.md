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
