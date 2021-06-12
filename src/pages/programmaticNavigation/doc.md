## 编程导航

> 通过 api（push,replace,go） 进行导航操作

### 跳转至下一个路由

- 标签(声明式)实现 <router-link :to="...">
- api(编程式): this.\$router.push()

### 替换当前路由

- 标签(声明式)实现 <router-link :to="..." replace>
- api(编程式): this.\$router.replace()

### 跳转至(后退，前进)

- api: this.\$router.go()
