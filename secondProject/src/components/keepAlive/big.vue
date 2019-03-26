<template>
    <div>
        <p>big</p>
        <input type="text" v-focus>
        <div>
            <keep-alive>
                <component :is="currentView"></component>
            </keep-alive>
            
        </div>
        <button @click="changeView">转变</button>
        <p>过滤器</p>
        <p>价格自动加￥</p>
        <span>{{ price | money }}</span>
    </div>
</template>

<script>

import Small1 from './small1'
import Small2 from './small2'

export default {
    name: 'Big',
    data(){
        return {
            currentView: Small1, 
            flag: true,  
            price: 20,        
        }
    },
    
    components: {
        Small1,
        Small2
    },

    methods: {
        changeView: function(){
            if (this.flag){
               this.currentView = Small2; 
               this.flag = false;
            } else {
                this.currentView = Small1;
                this.flag = true;
            }
            
        }
    },

    filters: {
        money: function(value){
            return "$" + value;
        }
    }
}
</script>

<style>

</style>
