<template>
    <div>
       <p>首页</p>
       <router-link to="/search">搜索</router-link>
        <my-footer></my-footer>
    </div>
</template>
<script>
import myFooter from '../components/footer';
export default {
    props:{

    },
    components:{
        myFooter
    },
    data(){
        return {

        }
    },
    computed:{

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