<template>
    <div class="page">
        <div>
           
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