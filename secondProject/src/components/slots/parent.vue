<template>
    <div>
        父组件
        <Children>
            <p>我是插槽</p>
        </Children>
    </div>
</template>

<script>

import Children from './child'

export default {
    name: 'Praent',
    data(){
        return {           
        }
    },
    
    components: {
        Children
    }
}
</script>

<style>

</style>
