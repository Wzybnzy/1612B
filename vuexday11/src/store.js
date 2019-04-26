import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        classify:[
            {
                title:"心动的鱼",
                id:1,
                type:"one"
            },
            {
                title:"好吃的凉菜",
                id:2,
                type:"two"
            }
        ],
        list: [
            {
                title:"酸菜鱼",
                price:10,
                num:0,
                id:3,
                type:'one'
            },
            {
                title:"巴沙鱼",
                price:5,
                num:0,
                id:4,
                type:'one'
            },
            {
                title:"花生米",
                price:2,
                num:0,
                id:5,
                type:'two'
            },
            {
                title:"拍黄瓜",
                price:5,
                num:0,
                id:6,
                type:'two'
            }
        ]
    },
    getters:{
        getClassify(state){
            return state.classify;
        },
        getList(state){
            return (type)=>{
                return state.list.filter(item => item.type == type);        }
        },
        getBuyList(state){
            return  state.list.filter(item => item.num > 0);
        },
        getTotalPrice(state,getters){
            return getters.getBuyList.reduce((prev,cur) => prev + cur.num * cur.price,0);
        },
        getTotalCount(state,getters){
            return getters.getBuyList.reduce((prev,cur) => prev + cur.num ,0);
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