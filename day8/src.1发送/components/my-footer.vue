<template>
    <footer>
        <input type="text" v-model="val">
        <button @click="$emit('send',val)">发送</button>
    </footer>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            val:''
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
<style scoped lang="scss">
@import '../scss/common.scss';
@import '../scss/_mixin.scss';
footer{
    height: pxTorem(50px);
    line-height: pxTorem(44px);
    width: 100%;
    text-align: center;
    @include box_flex;
    button{
        width: pxTorem(100px);
        height: 100%;;
    }
    input{
        @include flex;
        width: pxTorem(300px);
        background: chocolate;
    }
}
</style>