<template>
    <div>
        <div>这是del组件的数据：{{$store.state.count}}</div>
        <button @click="del">递减</button>
    </div>
</template>
<script>
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
        getList(){
            return this.$store.state.list.filter(item => item.count >30);
        }
    },
    methods:{
        del(){
            this.$store.commit('del');
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