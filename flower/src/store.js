import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        index: 0,//第几题
        ind: Number, //第几项被选中
        answerList: [
            {
                title: '以下不属于我国年画重要产地的是？',
                type: '福',
                flag: null,
                id:1111,
                answer: [
                    {
                        answer_name: '苏州桃花坞',
                        is_stand_answer: 0,
                        id: 1111

                    },
                    {
                        answer_name: '天津杨柳青',
                        is_stand_answer: 0,
                        id: 1111

                    },
                    {
                        answer_name: '四川攀枝花',
                        is_stand_answer: 1,
                        id: 1111

                    },
                    {
                        answer_name: '山东廊坊',
                        is_stand_answer: 0,
                        id: 1111

                    }
                ]
            },
            {
                title: '春节贴福字有什么习俗',
                type: '禄',
                flag: null,
                id:2222,
                answer: [
                    {
                        answer_name: '斜着贴',
                        is_stand_answer: 0,
                        id: 2222

                    },
                    {
                        answer_name: '倒着贴',
                        is_stand_answer: 1,
                        id: 2222

                    },
                    {
                        answer_name: '竖着贴',
                        is_stand_answer: 0,
                        id: 2222

                    },
                    {
                        answer_name: '正着贴',
                        is_stand_answer: 0,
                        id: 2222

                    }
                ]
            },
            {
                title: '以下哪个是二月初二的习俗？',
                type: '寿',
                id:3333,
                flag: null,
                answer: [
                    {
                        answer_name: '逛庙会',
                        is_stand_answer: 0,
                        id: 3333

                    },
                    {
                        answer_name: '回娘家',
                        is_stand_answer: 1,
                        id: 3333

                    },
                    {
                        answer_name: '大扫除',
                        is_stand_answer: 0,
                        id: 3333

                    },
                    {
                        answer_name: '讨欠债',
                        is_stand_answer: 0,
                        id: 3333

                    }
                ]
            }
        ],
        list: []
    },
    getters:{
        getList(state){
            return state.list.filter(item => item.is_stand_answer == 1);
        },
        getLength(state,getters){
            return getters.getList.length;
        }
    },
    mutations: {
        changeInd(state, ind) {
            state.ind = ind;
        },
        addNum(state,item) {
            if (state.index < state.answerList.length-1) {
                state.index++;
            }
            let index = state.answerList.findIndex(item1 => item1.id == item.id);
            if(item.is_stand_answer == 1){
                state.answerList[index].flag = true;
            } else {
                state.answerList[index].flag = false;
                
            }
            state.ind = null;
            state.list.push(item);
        }
    },
    actions: {
        changeActions({ state, commit },item) {
            setTimeout(() => {
                    commit('addNum',item);
                
            }, 1000);

        }
    }

});