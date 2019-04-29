<template>
    <footer>
        <router-link to="/">首页</router-link>
        <router-link to="/classify">分类</router-link>
        <router-link to="/shop">购物{{getTotalCount}}</router-link>
        <router-link to="/my">我的</router-link>
    </footer>
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
        ...mapGetters(['getTotalCount'])
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
footer{
    height: 50px;
    width: 100%;
    background: cornflowerblue;
    display: flex;
}
footer a {
    flex: 1;
    text-align: center;
    line-height: 50px;
}
</style>