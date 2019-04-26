<template>
    <div class="wrapper">
        <div class="content">
            <div class="left">
                <ul class="leftlist">
                    <li v-for="(item,index) in getClassify" :key="index" :class="{'active':index == ind}" @click="change(index,item.type)">{{item.title}}</li>
                </ul>
            </div>
            <div class="right">
                <my-list v-for="(item1,index1) in getList(getClassify[ind].type)" :key="index1"
                :title="item1.title"
                :price="item1.price"
                :num="item1.num"
                :id="item1.id"
                :type="item1.type"
                ></my-list>
            </div>
        </div>
        <footer>
            <my-dialog v-show="isShow" :buyList="getBuyList"></my-dialog>
            <div @click="showDialog">
                <span>总数：{{getTotalCount}}</span>
                <span>总价：{{getTotalPrice}}</span>
            </div> 
        </footer>
    </div>
</template>
<script>

import myList from './components/my-list';
import myDialog from './components/dialog';

import {mapGetters} from 'vuex';

export default {
    props:{

    },
    components:{
        myList,
        myDialog
    },
    data(){
        return {
            classify:[],
            list:[],
            buyList:[],
            ind:0,
            isShow:false
        }
    },
    computed:{
        ...mapGetters(['getClassify','getList','getTotalPrice','getTotalCount','getBuyList'])
        // totalPrice(){//[1,2,3]
        //     return this.buyList.reduce((prev,cur)=> prev + cur.num * cur.price,0);
        // },
        // totalCount(){
        //     return this.buyList.reduce((prev,cur)=> prev + cur.num ,0);
        // }
    },
    methods:{
        // getList(list,type){ //刷选数据
        //     return list.filter(item => item.type == type);
        // },
        change(ind,type){ //切换
            this.ind = ind;
            // this.list = this.getList(list,type);
        },
        showDialog(){
            this.isShow = !this.isShow;
        }
    },
    created(){
        console.log(this);
        // this.classify = classify;
        // //刷新之后的数据
        // this.list = this.getList(list,this.classify[0].type);
        // console.log(this);
        // this.$bus.$on('addCount',(num,id,type)=>{
        //     console.log(num);
        //     this.list = this.getList(list,type);
        //     let index = this.list.findIndex(item => item.id == id);
        //     this.list[index].num = num;
        //     let ind = this.buyList.findIndex(item => item.id==id);
        //     if(ind == -1){
        //         this.buyList.push(this.list[index]);
        //     }

        //     let cur = this.classify.findIndex(item => item.type == type);
        //     this.ind = cur;
        // });
    },
    mounted(){

    }
}
</script>
<style lang="">
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    html,body{
        height: 100%;
        width: 100%;
    }
    .wrapper{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    footer{
        height: 50px;
        width: 100%;
        border-top: 1px solid #ccc;
    }
    .content{
        flex: 1;
        width: 100%;
        display: flex;
    }
    .left{
        width: 120px;
        height: 100%;
        border-right: 1px solid #ccc;;
    }
    .leftlist li{
        height: 80px;
        line-height: 80px;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }
   .leftlist li.active{
        color: red;
    }
    .right{
        flex: 1;
    }
</style>