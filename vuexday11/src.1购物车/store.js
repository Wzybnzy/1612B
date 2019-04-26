import Vue from 'vue';
import Vuex from 'vuex';
console.log(Vuex);

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        count:1,
        list:[
            {
                title:'香蕉',
                price:10,
                num:1,
                id:1
            },
            {
                title:'苹果',
                price:12,
                num:1,
                id:2
            }
        ]
    },
    getters:{
        getList(state){
            return state.list;
        },
        getTotalPrice(state){
            return state.list.reduce((prev,cur) => prev + cur.num * cur.price,0);
        }
    },
    mutations:{
        add(state,id){
            let index = state.list.findIndex(item => item.id == id);
            state.list[index].num++;
        },
        del(state,id){
            let index = state.list.findIndex(item => item.id == id);
            state.list[index].num--;
        }
    }

    
   
});