### useRouter() 或 this.$router

router 对象上提供一些方法，可以用作跳转

### useRoute() 或 this.$route

route.params 可以或路径上的参数
route.hash 获取哈希
route.query 获取请求参数
route.meta 获取元信息

### 路由的跳转传参 this.$router

```js
this.$router({
  //   path: "/aa/bb",
  name: "xx",
  params: {}, //传入params; 注意如果使用path，那么params会失效，所以推荐使用name
  query: {}, //传入query
});
```

### 获取参数

1. 获取 params： this.$route.params
2. 获取 query: this.$route.query
