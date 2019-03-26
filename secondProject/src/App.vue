<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Big/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
// import Parent from './components/parent'
import Parent from './components/slots/parent'
import Big from './components/keepAlive/big'



export default {
  name: 'App',
  components: {
    HelloWorld,
    Parent,
    Big,
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
