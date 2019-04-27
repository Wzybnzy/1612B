<template>
    <dl :class="classname">
        <dt>
            <img v-lazy="img" alt="">
        </dt>
        <dd>
            <span>{{title}}</span>
            <slot></slot>
        </dd>
    </dl>
</template>
<script>
export default {
    props: ['img','title','id','authors','summary','classname'],
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
dl.downlist{
    width: 33.3%;
}
dl dt{
    height: 120px;
    width: 120px;
}
dl dt img{
    height: 100%;
    width: 100%;
}
dl.leftlist{
    display: flex;
    width: 100%;
}

dl dd{
    flex: 1
}
</style>