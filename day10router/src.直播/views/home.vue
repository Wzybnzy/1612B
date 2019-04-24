<template>
    <div class="page">
        <div>
            <ul class="list">
                <li @click="$router.push({name:'newest'})">最新</li>
                <li @click="$router.push({name:'follow'})">关注</li>
                <li @click="$router.push({name:'hottest'})">热门</li>
                <li>NBA</li>
                <li>CBA</li>
            </ul>
            <router-view></router-view>
        </div>
        <Footer />
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
.list{
    height: 44px;
    display: flex;
    background: burlywood;
}
.list li{
    flex: 1;
    text-align: center;
    line-height: 44px;
}
</style>