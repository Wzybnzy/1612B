<template>
    <header>
        <span><</span>
        <slot>6666</slot>
        <slot :list="list" :num="666"></slot>
        <div>
            <slot name="search"></slot>
        </div>
        <span>...</span>
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
            list:[
                {
                    title:'商品'
                },
                {
                    title:'详情'
                },
                {
                    title:'评价'
                }
            ]
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        console.log(this);
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
header{
    height: 44px;
    font-size: 16px;
    width: 100%;
    background: cornflowerblue;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>