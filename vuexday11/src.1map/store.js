import Vue from 'vue';
import Vuex from 'vuex';
console.log(Vuex);

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        count:1,
        list:[
            {
                grade:'1612B',
                count:40
            },
            {
                grade:'1701C',
                count:24
            },
            {
                grade:'1612A',
                count:39
            }
        ]
    },
    getters:{
        getList(state){
           return state.list.filter(item => item.count > 30);
        },
        getLength(state,getters){
            return getters.getList.length;
        }
    },
    mutations:{
        addFn(state,obj){
            console.log(9999);
            state.list.push(obj);
        },
        add(state,num){
            // state.count++;
            state.count+=num;
        }
    },
    actions:{ //异步
        addCount({commit},num){
            setTimeout(()=>{
                commit('add',num);
            },2000);
        }
    }
   
});