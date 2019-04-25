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
            方法1(state){//

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




属性                   不使用map辅助函数                           使用map辅助函数
state                 this.$store.state.count                    ...mapState(['count'])  // 放在计算属性里面
getters               this.$store.getters.getList                ...mapGetters(['getList'])  // 放在计算属性里面
mutations             this.$store.commit('方法名')               ...mapMutations(['方法名']) // @click="add(参数)"
actions               this.$store.dispatch('方法名')             ...mapActions(['方法名'])   // 放在methods