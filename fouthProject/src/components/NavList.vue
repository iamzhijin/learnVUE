<template>
    <div>
        <div>
            <ul>
                <li><router-link to="/frontInfo">前端</router-link></li>
                <li><router-link to="/backInfo">后端</router-link></li>
            </ul>
        </div>
        
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>

<style scoped>
    ul {
       background-color: #409EFF;
       padding: 8px; 
    }
    li {
        display: inline-block;
        padding: 8px;
        color: #fff;
    }
    li:hover {
        background-color: #b3d8fe;
    }
</style>
