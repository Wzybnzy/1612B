import axios from 'axios';
import * as types from '../types';
const state={
    list:[]
};
const getters = {
    getlistGetters(state){
        return state.list;
    }
};
const mutations = {
    [types.GETLISTMUTATIONS](state,arr){
        state.list = arr;
    },
    [types.ADDLISTMUTATIONS](state,data){
        state.list.unshift(data);
    },
    [types.DELLISTMUTATIONS](state,id){
        state.list = state.list.filter(item => item.id != id);
    },
    [types.UPDATELISTMUTATIONS](state,data){
        let index = state.list.findIndex(item => item.id == data.id);
        state.list.splice(index,1,data);
    },
    [types.FILTERMUTATIONS](state,data){
        state.list = data;
    }
};
const actions  ={
    getList({commit}){
        axios.get('http://jsonplaceholder.typicode.com/todos').then((res)=>{
            console.log(res);
            commit(types.GETLISTMUTATIONS,res.data);
        });
    },
    addList({commit},title){
        axios.post(`http://jsonplaceholder.typicode.com/todos`,{title,completed:false,userId:1}).then((res)=>{
            console.log(res);
            commit(types.ADDLISTMUTATIONS,res.data);
        });
    },
    delList({commit},id){
        console.log('delete');
        axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`).then((res)=>{
            commit(types.DELLISTMUTATIONS,id);
        });
    },
    updateList({commit},obj){
        axios.put(`http://jsonplaceholder.typicode.com/todos/${obj.id}`,obj).then((res)=>{
            console.log(res.data);
            commit(types.UPDATELISTMUTATIONS,res.data);
        });
    },
    filterList({commit},count){
        axios.get(`http://jsonplaceholder.typicode.com/todos/?_limit=${count}`).then((res)=>{
            console.log(res);
            commit(types.FILTERMUTATIONS,res.data);
        });
    }
};

export default{
    state,
    getters,
    mutations,
    actions
}