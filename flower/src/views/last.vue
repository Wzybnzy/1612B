<template>
    <div>
        最后一页,回答正确了题{{getLength}}
    </div>
</template>
<script>
import {mapState,mapGetters} from 'vuex';
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
        ...mapState(['list']),
        ...mapGetters(['getLength'])
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