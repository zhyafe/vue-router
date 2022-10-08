## 动态路由

> 把某种模式的路由映射到同一个组件

格式： /user/:id 使用冒号

```js
const routes = [{ path: "/user/:id", component: UserScreen }];
```

例如 将路由 user/1 user/2 映射到 UserScreen

### 获取动态路由参数

- 可在 this.\$route 获取参数

### 刷新界面

在动态路由界面再跳转至动态界面，不会执行再执行生命周期函数

- 可通过 watch \$route 参数进行页面刷新
- 使用路由卫士

### 404 路由

```js
const routes = [{ path: "*", component: NotFoundScreen }];
```

使用\*号匹配所有路由
