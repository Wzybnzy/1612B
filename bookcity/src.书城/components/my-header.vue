<template>
    <header>
       <slot></slot>
    </header>
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
header{
    height: 44px;
    width: 100%;
    display: flex;
    background: #ccc;
}
header span{
    width: 100px;
    height: 44px;
    line-height: 44px;

}
header ul{
    flex: 1;
    display: flex;
}
header ul li{
    flex: 1;
    text-align: center;
    line-height: 44px;
}
header ul li.router-link-exact-active{
    color: darkorange;
}
</style>