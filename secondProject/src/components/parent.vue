<template>
    <div>
        父组件
        <input type="text" v-model="inputMsg">
        <Children :title="msg" :inputMsg="inputMsg" :myObj="myObj" @send="getMsg" :num="getNum"/>
        <button @click="changeMsg">修改数据</button>
        <br>
        <p>父-->子，子运算， 子-->父</p>
        {{ info }}
        <input type="text" v-model="num">
    </div>
</template>

<script>

import Children from './children'

export default {
    name: 'Praent',
    data(){
        return {
            msg: "儿子 我是你爸爸",
            inputMsg: "输入的数据",
            myObj: {
                name: "iven",
                age: "100"
            },
            info: "",
            num: "",

        }
    },

    computed: {  
        getNum: function(){
            return this.num - 0;
        }
    },

    methods: {
        changeMsg: function(){
            this.msg = "修改后的数据"
        }, 
        
        getMsg: function(data){
            this.info = data
        }
    },

    components: {
        Children
    }
}
</script>

<style>

</style>
