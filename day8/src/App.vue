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
  </div>
</template>

<script>
import myList from './components/list';
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
        });
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


