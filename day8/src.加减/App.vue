<template>
  <div id="app">
    <ul>
        <my-list v-for="(item,index) in list" 
        :key="index"
        :title="item.title"
        :price="item.price"
        :count="item.count"
        :id="item.id"
        ></my-list>
    </ul>
    <div>{{totalPrice}}</div>
  </div>
</template>

<script>
import myList from './components/list';
import Evnetbus from './js/eventbus';
export default {
    name: "App",
    data() {
        return {
            list:[
                {
                    title:'苹果',
                    price:10,
                    count:0,
                    id:1
                },
                {
                    title:'香蕉',
                    price:5,
                    count:0,
                    id:2
                }
            ],
            buyList:[]
        };  
    },
    components: {
        myList
    },
    methods:{
     
    },
    created(){
        this.$bus.$on('addCount',(num,id)=>{
            console.log(num,id);
            let index = this.list.findIndex(item=>item.id == id);
            this.list[index].count = num;

            let ind = this.buyList.findIndex(item => item.id==id);
            if(ind == -1){
                this.buyList.push(this.list[index]);
            }
            console.log(this.buyList);
        });
    },
    computed:{
        totalPrice(){ // [1,2,3,4]
            return this.buyList.reduce((prev,cur)=>{
                return prev + cur.count * cur.price;
            },0);
        }
    }
};
</script>

<style lang="scss" >
@import './scss/common.scss';
@import './scss/_mixin.scss';
#app {
//     font-size: pxTorem(16px);
//    @include box_flex;
//    height: 100%;
//    width: 100%;
//    @include direction(column);
}
</style>


