<template>
    <div class="page">
        <div>
            +
        </div>
        <div class="content">
            <div>
                <button @click="$router.push({name:'chongzhi'})">充值</button>
                <button @click="$router.push({name:'frum'})">购物车</button>
            </div>
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
.content{
    height: 93%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.3);
}
.content >div{
    height: 300px;
    width: 100%;
    background: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
}
</style>