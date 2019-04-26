<template>
    <div>
        <my-list v-for="(item,index) in getList" :key="index"
        :title="item.title"
        :price="item.price"
        :num="item.num"
        :id="item.id"
        ></my-list>
        <div>总价：{{getTotalPrice}}</div>
        <!-- {{getList}} -->
        <h3>下边是购物车的数据</h3>
        <my-car></my-car>
    </div>
</template>
<script>
import myList from '../components/my-list';
import myCar from '../components/car';
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
    props:{

    },
    components:{
        myList,
        myCar
    },
    data(){
        return {
            
        }
    },
    computed:{
        ...mapGetters(['getList','getTotalPrice'])
    },
    methods:{
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>