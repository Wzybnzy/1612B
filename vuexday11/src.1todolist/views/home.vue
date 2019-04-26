<template>
    <div>
        <Add />
        <myFilter />
        <Todo />
    </div>
</template>
<script>
import Todo from '../components/todo';
import Add from '../components/add';
import myFilter from '../components/filter';
export default {
    props:{

    },
    components:{
        Todo,
        Add,
        myFilter
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

</style>