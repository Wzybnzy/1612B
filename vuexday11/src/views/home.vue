<template>
    <div>
        
        <div>这是首页的是数据：{{$store.state.count}}</div>
        <my-add></my-add>
        <my-del></my-del>


        <div>list数据：{{$store.state.list}}</div>
        <div>计算属性list数据：{{getList}}</div>
        <div>$store里面的list数据：{{$store.getters.getList}}</div>

        <button @click="add">点击</button>
    </div>
</template>
<script>
import myAdd from '../components/add';
import myDel from '../components/del';
export default {
    props:{

    },
    components:{
        myAdd,
        myDel
    },
    data(){
        return {

        }
    },
    computed:{
        getList(){
            return this.$store.state.list.filter(item => item.count >30);
        }
    },
    methods:{
        add(){
            console.log(this);
            // this.$store.commit('add');
            this.$store.dispatch('addActions');
        }
    },
    created(){
        console.log(this);
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>