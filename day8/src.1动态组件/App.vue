<template>
    <div class="wrapper">
        <!-- <my-list :list="list"></my-list> -->
        <header>
            <span @click="componentId = 'myClassify'">分类</span>
            <span @click="componentId='myBrand'">品牌</span>
        </header>
        <section>
            <!-- <my-brand></my-brand> -->
            <!-- <my-classify></my-classify> -->
            <keep-alive include="myClassify">
                <component :is="componentId"></component>
            </keep-alive>
        </section>
    </div>
</template>
<script>
import myList from './components/list';
import myClassify from './components/classify';
import myBrand from './components/brand';
import  axios from 'axios';
export default {
    props:{

    },
    components:{
        myList,
        myClassify,
        myBrand
    },
    data(){
        return {
            list:[],
            componentId:'myClassify'
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        axios.get('/api/data').then((res)=>{
            this.list = res.data;
        });
    },
    mounted(){

    }
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
    body,html{
        height: 100%;
        width: 100%;
    }
    .wrapper{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    header{
        height: 44px;
        width: 100%;
        background: cornflowerblue;
        display: flex;
    }
    header span{
        flex: 1;
        text-align: center;
        line-height: 44px;
    }
</style>