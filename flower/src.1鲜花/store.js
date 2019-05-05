import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        classifyList:[]
    },
    getters:{
        getListGetters(state){
            return state.classifyList;
        }
    },
    mutations:{
        getList(state,obj){
            let index = state.classifyList.findIndex(item => item.Subject == obj.Subject);
            if(index ==-1){
                state.classifyList.push(obj);
            } else {
                state.classifyList.splice(index,1,obj)
            }
            console.log(state.classifyList);
        }
    },
    actions:{}
});