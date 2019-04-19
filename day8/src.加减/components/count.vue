<template>
    <div>
        <span @click="del">-</span>
        <span>{{count}}</span>
        <span @click="add">+</span>
    </div>
</template>
<script>
export default {
    props: ["count", "id"],
    components: {},
    data() {
        return {};
    },
    computed: {},
    methods: {
        add() {
            console.log(this);
            // this.count++
            let num = this.count + 1;
            this.$bus.$emit("addCount", num, this.id);
        },
        del() {
            let num = this.count - 1;
            this.$bus.$emit("addCount", num, this.id);
        }
    },
    created() {},
    mounted() {}
};
</script>
<style scoped lang="">
</style>