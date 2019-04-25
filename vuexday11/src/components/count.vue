<template>
    <div>
        <span @click="del(id)">-</span>
        <span>{{num}}</span>
        <span @click="add(id)">+</span>
    </div>
</template>
<script>
import {mapMutations} from 'vuex';
export default {
    props:['num','id'],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        ...mapMutations(['add','del'])
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>