<template>
    <div>
        <div class="page">
            <p>首页</p>
            <!-- <router-link to="/search">搜索</router-link> -->
            <div>
                <p @click="goToSearch">点击跳转搜索</p>
            </div>
        </div>
        
        <my-footer></my-footer>
    </div>
</template>
<script>
// import myFooter from '../components/footer';
export default {
    props: {},
    components: {
        // myFooter
    },
    data() {
        return {};
    },
    computed: {},
    methods: {
        goToSearch(){
            console.log('goToSearch');
            // this.$router.push('search'); 字符串
            // this.$router.push({path:'/search'}); 对象
            // this.$router.push({name:'search'});//命名式路由跳转
            this.$router.replace({name:'search'});//命名式路由跳转
        }
    },
    created() {
        console.log(this.$router,this.$route);
    },
    mounted() {}
};
</script>
<style scoped lang="">
</style>