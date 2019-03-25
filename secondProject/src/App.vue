<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Parent/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
// import Parent from './components/parent'
import Parent from './components/slots/parent'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Parent
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
