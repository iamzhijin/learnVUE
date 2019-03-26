<template>
    <div>
        父组件
        <Children>
            <div slot="d1">
                第一个插槽
            </div>
            <div slot="d2" slot-scope="props">
                {{ props.text }}
            </div>
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
