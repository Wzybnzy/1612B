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
            this.$bus.$emit("addCount", num,this.id,this.type);
        },
        del() {
            let num = this.num - 1;
            this.$bus.$emit("addCount", num,this.id,this.type);
        }
    },
    created() {},
    mounted() {}
};
</script>
<style scoped lang="">
</style>