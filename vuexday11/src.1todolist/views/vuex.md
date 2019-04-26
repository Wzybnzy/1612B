state:  共享的数据
getters:   从state里面派生出一些新的数据的时候

mutations:  //同步函数，修改state里面的状态，只能通过提交mutations里面的方法
actions:    //异步函数


在视图里面使用

state

1.  this.$store.state.count 
2.  放在一个计算属性里面
3.  mapState([''])


getters:
1. 通过计算属性 ,缺点需要复制出很多这个属性

2. this.$store.getters.属性名

3. mapGetters(['属性1'])


mutations:

1. this.$store.commit('方法名'，参数)

2. mapMutations(['方法名'])  // @click="方法名(参数)"


actions:

1. this.$store.dispatch('方法名',参数)

2. mapActions(['方法名'])  @click="方法名(参数)"



store.js


state:{
    共享数据,
    数据1，
    数据2
},


getters:{
    属性1(state,getters){ 

    },
    属性2(){
        getters.属性1()
    }
}



mutations:{
    方法1(state,接受的参数){  //只要这两个参数，默认第一个参数是state,没有第三个参数
        改变state里面的状态
    },
    方法2(){

    }

}


actions:{
    方法1(context,传递过来的参数){
        //context  是一个对象，对象里面有commit,dispatch,state
        context.commit(mutations里面的方法);
    },
    方法2({commit},传递过来的参数){
        commit(mutations里面的方法)
        commit(mutations里面的方法,参数)
    }
}



moudles