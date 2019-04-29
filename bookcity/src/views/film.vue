<template>
    <div>
        <div>
            <ul>
                <router-link to="received" tag="li">正在热映</router-link>
                <router-link to="release" tag="li">即将上映</router-link>
            </ul>
            <router-view></router-view>
        </div>

    <my-footer></my-footer>
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
ul{
    display: flex;
    height: 44px;;
    background: coral;
}
ul>li{
    flex: 1;
    text-align: center;
    line-height: 44px;
}

</style>