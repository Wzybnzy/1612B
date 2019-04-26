<template>
    <div>
        
    </div>
</template>
<script>
import myList from '../components/my-list';
import myCar from '../components/car';
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
    props:{

    },
    components:{
        myList,
        myCar
    },
    data(){
        return {
            
        }
    },
    computed:{
        ...mapGetters(['getList','getTotalPrice'])
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