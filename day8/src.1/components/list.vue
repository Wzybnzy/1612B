<template>
    <ul>
        <li v-for="(item,index) in list" :key="index">
            <h3>{{item.title}}</h3>
            <list v-if="item.children" :list="item.children"></list>
        </li>
    </ul>
</template>
<script>
export default {
    name:'list',
    props: {
        list:Array
    },
    components: {},
    data() {
        return {};
    },
    computed: {},
    methods: {},
    created() {},
    mounted() {}
};
</script>
<style scoped lang="">
</style>