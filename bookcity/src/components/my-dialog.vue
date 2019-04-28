<template>
    <div class="dialog">
        {{getBuyList}}
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
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
        ...mapGetters(['getBuyList'])
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
.dialog{
    position: absolute;
    left: 0;
    top: 0;
    height: 94%;
    width: 100%;
    background: rgba(0,0,0,0.3);
}
</style>