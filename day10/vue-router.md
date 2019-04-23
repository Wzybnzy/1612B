/    首页
/discover   发现
/order      订单
/profile    我的


path: /
component: 首页

path: /discover
compoent: 发现


1. 下载vue-router

2. 在router文件夹下的index.js(路由配置文件)

- 引入vue-router,是vue的一个插件
   <router-view></router-view>  //视图的出口
   <router-link to=""></router-link>   //路由跳转，必须要要有一个to="",最终解析成a标签了

- 注册插件Vue.use(VueRouter)
- 配置路由信息 routes:[
    {
        path:'/',//路径
        component: 视图
    }
    ] //所有的路由信息

- 把routes挂载到VueRouter的实例上边
```
const router = new VueRouter({
    routes
})
```


- 把vue-router的实例抛出去

```
    export default router;
```

3. 在main.js 里面，引入index.js,把刚刚抛出的路由信息挂载到vue实例上边

```
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
```

4. 在App.vue输出视图   <router-view></router-view>  //视图的出口

5. mode:hash/history //不会重载整个页面 ，默认是hash,在配置路由信息的文件里面设置
