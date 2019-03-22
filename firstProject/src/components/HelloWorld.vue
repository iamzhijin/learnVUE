<template>
  <div class="head">
    <ul>
      <li v-bind:class="{active: isActive}"><a href="#">主页</a></li>
      <li><a href="#">板块1</a></li>
      <li><a href="#">板块2</a></li>
      <li><a href="#">板块3</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
      return {
        isActive: true,
      }
  },
  methods: {
    
  },
  computed: {  // 计算属性
    
  },
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: #41b883;
  }

  ul li {
    display: inline-block;
    padding: 14px 16px;
  }

  ul li a {
    color: white;
    text-align: center;
    text-decoration: none;
  }

  li:hover, .active {
    background-color: #35495d;
  }

</style>
