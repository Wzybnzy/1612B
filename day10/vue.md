/    首页

/discover   发现
/order      订单
/profile  我的



path:  /  
componet : home



path:/discover
componet: discover


1. 下载vue-router  插件  

2 .新建一个router的文件夹，在文件夹下新建一个index.js(路由配置文件)
在这个文件里面

Vue.use(VueRouter);
<router-view></router-view>  //视图出口
<router-link to="/search"></router-link>  //跳转路由，解析成a标签 

3.引入vue-router


4. 配置路由信息  routes:[]


5. 抛出路由信息 new VueRouter({routes});


6.在main.js，把配置的路由信息跟vue实例关联起来。

7. 在App.vue 设置路由的出口   <router-view></router-view>  

8. mode: hash/history  // 不会重载整个页面,默认是hash模式


9. 
- this.$router //存放的是全局路由信息（所有的路由信息）
  push()
  replace()
  go()
- this.$route  //当前的路由信息



