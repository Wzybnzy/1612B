<template>
    <div>
        <my-list v-for="(item,index) in getList" :key="index"
        :title="item.title"
        :price="item.price"
        :num="item.num"
        :id="item.id"
        ></my-list>
        <div>总价：{{getTotalPrice}}</div>
    </div>
</template>
<script>
import myList from './my-list';
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
    props:{

    },
    components:{
        myList
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