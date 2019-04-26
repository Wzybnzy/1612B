<template>
    <div>
        <h3>筛选</h3>
        <select v-model="count" @change="filterList(count)">
            <option value="200">200</option>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="20">20</option>
            <option value="20">20</option>
            <option value="10">10</option>
            <option value="5">5</option>
        </select>
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
            count:200
        }
    },
    computed:{

    },
    methods:{
        ...mapActions(['filterList'])
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>