<template>
    <div class="page">
        <button @click="goToAnswer">开始答题</button>
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
        goToAnswer(){
            this.$router.push({path:'/answer'});
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.page{
    height: 100%;
    width: 100%;

}
button{
    height: 44px;
    width: 120px;
}
</style>