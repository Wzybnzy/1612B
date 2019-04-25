1. 安装 npm i vuex
2. store.js
- 引入vue
- 引入vuex
- 注册 Vue.use(Vuex)

- 
```
    new Vuex.Store({
        state:{},
        mutations:{
            方法1(){

            },
            方法2(){
                
            }
        }
    });
```

3. main.js  挂载实例



怎么在视图/组件里面获取store里面的共享状态？   this.$store.state.属性名

修改store里面的state，只能通过提交mutations来实现。
在组件、视图里面通过 this.$store.commit('方法名');  