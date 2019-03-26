<template>
    <div>
        <p>Small1111</p>
        <p>自定义指令：自动获取焦点</p>
        <input type="text" v-myfocus>
    </div>
</template>

<script>

export default {
    name: 'Small1',
    data(){
        return {           
        }
    },
    
    components: {
    },

    directives: {
        myfocus: {
            inserted: function(el){
                el.focus()
            }
        }
    }
}
</script>

<style>

</style>