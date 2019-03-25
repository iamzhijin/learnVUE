<template>
    <div>
        子组件
        {{ title }}-{{ inputMsg }}-{{ myObj.name }}
        <p>父-->子，子运算， 子-->父</p>
        <div>
            <button @click="send">传递</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Children',
    data(){
        return {
            msg : "我是子组件数据"
        }
    },
    props: {
        title: {
            type: String,
            required: true,
            default: "i am title"
        },
        inputMsg: {
            type: String,
        },
        myObj: {
            type: Object,
            default: function(){
                return {name: "未知"}
            }
        },
        num: {
            type: Number,

        }       

    },
    methods: {
        send: function(event){
            this.$emit("send", this.addNum)
        }
    },
    computed: {
        addNum: function(){
            return this.num * 5;
        }
    }
}
</script>

<style>

</style>