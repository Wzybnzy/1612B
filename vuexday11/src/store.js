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
    mutations:{
        add(state){
            // state.count += num;
            // console.log(666);
                state.count++;
            // setTimeout(()=>{
            // },2000);
        },
        del(state){
            state.count--;
        }
    },
    getters:{ 
      getList(state){
          return state.list.filter(item => item.count>30);
      }  
    },
    actions:{
        addActions(context){
            console.log(context);
            setTimeout(()=>{
                context.commit('add');
            },2000);
        }
    }
});