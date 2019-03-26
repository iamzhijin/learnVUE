<template>
    <div>
        axios 请求数据
        <div>
            <ul>
                <li v-for="(each, index) in result" :key="index">{{ each.caseCode }}</li>
            </ul>
            
        </div>
    </div>
    
</template>

<script>
export default {
    data(){
        return {
            result: '',

        }
    },

    created(){  // 生命周期函数 --> 组件被创建时调用
        this.$axios.get(this.HOME + '/api/request?uid=qqqq&api=FX105&args=%7B"entInfo"%3A"小米科技有限责任公司"%2C"pageNum"%3A"1"%2C"pageSize"%3A"10"%2C"reason"%3A%5B%5D%2C"sort"%3A%7B"amount"%3A"desc"%2C"trialDate"%3A"desc"%7D%2C"status"%3A%5B%5D%2C"type"%3A%5B%5D%7D&sign=c3a7199b995b3d64145b062114144e9f0')
            .then(response => {
                console.log(response.data);
                this.result = response.data.data.list;
            })
            .catch(error => {
                console.log(error);
            })
    }
}
</script>

<style>

</style>
