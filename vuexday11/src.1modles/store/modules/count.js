import * as types from '../types';
const state= {
    count:1
};

const getters ={
    getCount(state){
        return state.count;
    }
}

const mutations = {
    [types.ADD](state,num){
        // state.count++;
        state.count+=num;
    },
    del(state){
        state.count--;
    }
};


const actions = {
    addCount({commit},num){
        setTimeout(()=>{
            commit(types.ADD,num);
        },2000);
    }
};


export default {
    state,
    getters,
    mutations,
    actions
}