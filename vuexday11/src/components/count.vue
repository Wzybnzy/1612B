<template>
    <div>
        <div v-if="num">
            <span @click="del(id)">-</span>
            <span>{{num}}</span>
        </div>
        <span @click="add(id)">+</span>
    </div>
</template>
<script>
import {mapMutations} from 'vuex';
export default {
    props: ["num", "id", "type"],
    components: {},
    data() {
        return {};
    },
    computed: {},
    methods: {
        ...mapMutations(['add','del'])
        // add() {
        //     let num = this.num + 1;
        //     this.$bus.$emit("addCount", num, this.id,this.type);
        // },
        // del() {
        //     let num = this.num - 1;
        //     this.$bus.$emit("addCount", num, this.id,this.type);
        // }
    },
    created() {},
    mounted() {}
};
</script>
<style scoped lang="">
div {
    font-size: 28px;
}
</style>