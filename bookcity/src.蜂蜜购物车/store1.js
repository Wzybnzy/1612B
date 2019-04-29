import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);


export default new Vuex.Store({
    state:{
        list:[],
        buyList:[]
    },
    getters:{
        getlistGetters(state){
            console.log('getters');
            return state.list;
        },
        getTotalPrice(state){
            let sum = 0;
            state.list.forEach(item => {
               sum += item.res.reduce((prev,cur) => prev + cur.num * cur.price,0);
            });
            return sum.toFixed(2);
        },
        getBuyList(state){
            return state.buyList;
        }
    },
    mutations:{
        getlistMutations(state,arr){
            console.log('getlistMutations');
            state.list = arr;
        },
        add(state,{ind,index,n}){
            console.log(ind,index);
            state.list[ind].res[index].num = n;
            let id = state.list[ind].res[index].id;
            let current = state.buyList.findIndex(item => item.id == id);
            if(current == -1){
                state.buyList.push(state.list[ind].res[index]);
            }
            console.log(state.buyList);
        }
    },
    actions:{
        getList({commit}){
            console.log('actions');
            axios.get('/api/list').then((res)=>{
                commit('getlistMutations',res.data);
            });
        }
    }
});