<template>
    <div>
        <div v-if="num">
            <span @click="del">-</span>
            <span>{{num}}</span>
        </div>
        <span @click="add">+</span>
    </div>
</template>
<script>
export default {
    props: ["num", "id", "type"],
    components: {},
    data() {
        return {};
    },
    computed: {},
    methods: {
        add() {
            let num = this.num + 1;
            this.$bus.$emit("addCount", num,this.id);
        },
        del() {
            let num = this.num - 1;
            this.$bus.$emit("addCount", num,this.id);
        }
    },
    created() {},
    mounted() {}
};
</script>
<style scoped lang="">
</style>