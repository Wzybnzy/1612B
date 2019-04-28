<template>
    <div class="search" @click="$router.push({path:'/search'})">
        <p>请输入书名、作者</p>
        <span v-if="flag" @click.stop="$emit('change')">点击</span>
    </div>
</template>
<script>
export default {
    props:['flag'],
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
.search{
    height: 50px;
    line-height: 50px;
    width: 100%;
    display: flex;
    padding: 0 10px;
    box-sizing: border-box;
}
.search p{
    flex: 1;
}
</style>