import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
console.log(Vuex);

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        list:[]
    },
    getters:{
        getlistGetters(state){
            return state.list;
        }
    },
    mutations:{
        getlistMutations(state,arr){
            state.list = arr;
        },
        addlistMutations(state,data){
            state.list.unshift(data);
        },
        dellistMutations(state,id){
            state.list = state.list.filter(item => item.id != id);
        },
        updatelistMutations(state,data){
            let index = state.list.findIndex(item => item.id == data.id);
            state.list.splice(index,1,data);
        },
        filterMutations(state,data){
            state.list = data;
        }
    },
    actions:{
        getList({commit}){
            axios.get('http://jsonplaceholder.typicode.com/todos').then((res)=>{
                console.log(res);
                commit('getlistMutations',res.data);
            });
        },
        addList({commit},title){
            axios.post(`http://jsonplaceholder.typicode.com/todos`,{title,completed:false,userId:1}).then((res)=>{
                console.log(res);
                commit('addlistMutations',res.data);
            });
        },
        delList({commit},id){
            console.log('delete');
            axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`).then((res)=>{
                commit('dellistMutations',id);
            });
        },
        updateList({commit},obj){
            axios.put(`http://jsonplaceholder.typicode.com/todos/${obj.id}`,obj).then((res)=>{
                console.log(res.data);
                commit('updatelistMutations',res.data);
            });
        },
        filterList({commit},count){
            axios.get(`http://jsonplaceholder.typicode.com/todos/?_limit=${count}`).then((res)=>{
                console.log(res);
                commit('filterMutations',res.data);
            });
        }
    }

});