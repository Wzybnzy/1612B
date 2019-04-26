<template>
    <div>
        <div>$store:{{$store.state.count}}</div>
        <div>computed:{{countComputed}}</div>
        <div>mapState:{{count}}</div>
        <div>mapStategetCount:{{getCount}}</div>


        <div>{{$store.getters.getList}}</div>
        <div>{{getList}}</div>
        <div>班级人数大于30 的有{{getLength}}个</div>

        <button @click="addFn({grade:'1611A',count:39})">添加</button>
        <button @click="addCount(5)">添加count</button>


        <my-add></my-add>
        <my-del></my-del>
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
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
        // count(){
        //     return this.$store.state.list.filter()
        // },
        ...mapState(['count','list']),// {count(){},list(){}}
        ...mapGetters(['getList','getLength','getCount']),
      
    //    count(){},
    //    list(){},
    //    getList(){}
        countComputed(){
            return this.$store.state.count;
        },
        // getList(){
        //     return this.$store.state.list.filter(item => item.count > 30);
        // }
    },
    methods:{
        ...mapMutations(['addFn']),
        ...mapActions(['addCount'])
        // add(){
        //     this.$store.dispatch('addCount');
        // }
        // add(){
        //     this.$store.commit('add',{grade:'1611A',count:39});
        // }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>