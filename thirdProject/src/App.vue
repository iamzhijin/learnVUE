<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Api1/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Api1 from './components/api1'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Api1,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
