<template>
    <div class="add">
        <input type="text" v-model="val">
        <button @click="addList(val)">添加</button>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
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
        ...mapActions(['addList'])
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.add{
    width:80%;
    margin-left: 10%;
    display: flex;
}
input{
    flex: 1;
}
button{
    width: 200px;
    height: 44px;
}
</style>