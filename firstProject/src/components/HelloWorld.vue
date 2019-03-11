<template>
  <div class="hello">
    {{ "hello" }}
    <p>{{ msg }}</p>
    <p>{{ boolean ? 'dd' : 'ff' }}</p>
    <p v-html=htmlMsp></p>
    <p v-text=htmlMsp></p>
    <a v-bind:href=url>v-bind</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      htmlMsp: '<p>v-html</p>',
      boolean: true,
      url: "#"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
