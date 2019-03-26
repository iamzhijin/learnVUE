<template>
    <div>
        子组件
        <slot name="d1"></slot>
        <slot name="d2" :text="context"></slot>
    </div>
</template>

<script>

export default {
    name: 'Child',
    data(){
        return {
            context: "处理后的数据"           
        }
    },   
}
</script>

<style>

</style>
