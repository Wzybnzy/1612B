<template>
    <div>
        <div>这是add组件的数据:{{$store.state.count}}</div>
        <button @click="add">递增</button>
        <!-- <div>{{$store.getters.getList}}</div> -->
        <div>{{getList}}</div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        ...mapGetters(['getList'])
        // getList(){
        //     return this.$store.state.list.filter(item => item.count >30);
        // }
    },
    methods:{
        add(){
            console.log(this);
            this.$store.commit('add',5);
            // this.$store.state.count++;
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>