import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


export default new Vuex.Store({
    state:{
        buyList:[]
    },
    getters:{
        getBuyList(state){
            return state.buyList;
        },
        getTotalCount(state){
            return state.buyList.reduce((prev,cur)=> prev + cur.count,0);
        },
        getTotalPrice(state){
            // return state.buyList.reduce((prev,cur)=> prev + cur.count* cur.price,0);
            // state.buyList.forEach(item => {
            //     if(item.flag){

            //     }
            // });

           return state.buyList.filter(item => item.flag).reduce((prev,cur) => prev + cur.count * cur.price,0)
        }
    },
    mutations:{
        shop(state,obj){
            let index = state.buyList.findIndex(item => item.id == obj.id);
            if(index == -1){
                state.buyList.push(obj);
            }
            console.log(state.buyList);
        },
        checkClick(state,ind){
            state.buyList[ind].flag = !state.buyList[ind].flag;
        },
        allClickMuTations(state,flag){
            state.buyList.forEach(item => item.flag = flag);
        }
    },
    actions:{

    }
})