import Vue from 'vue';
console.log(Vue);
let vm = new Vue({
    // el:'#app',
    template:`<span ref="grade">{{grade}}</span>`,//模板字符串，会替换挂载元素
    data:{
        grade:'1612B'
    },
    beforeCreate(){ //初始化，收集配置项
        console.log('beforeCreate');
        console.log(this.$el,this.$data,this.grade);
    },
    created(){ //分配配置项到实例上边
        console.log('created');
        console.log(this.$el,this.$data,this.grade);
    },
    beforeMount(){ //生成dom节点之前
        console.log('beforeMount');
        console.log(this.$el,this.$data,this.grade);
    },
    mounted(){ //生成dom节点
        console.log('mounted');
        console.log(this.$el,this.$data,this.grade);
    },
    beforeUpdate(){ //数据更新之前触发
        console.log('beforeUpdate');
        //this.$refs 获取页面里面所有有ref属性的dom
        console.log(this.$refs.grade.innerHTML);
        console.log(this.$el,this.$data,this.grade);
    },
    updated(){ //数据更新的时候触发
        console.log('updated');
        console.log(this.$refs.grade.innerHTML);
        console.log(this.$el,this.$data,this.grade);
    }
});
window.vm = vm;
vm.$mount('#app');//外部挂载元素
// console.log(document.querySelector('span'));