<template>
  <div class="hello">
    {{ "hello" }}
    <p>{{ msg }}</p>
    <p>{{ boolean ? 'dd' : 'ff' }}</p>
    <p v-html="htmlMsp"></p>
    <p v-text="htmlMsp"></p>
    <a v-bind:href="url">v-bind</a>
    <p v-if="boolean"> can you see me?</p>
    <div>
      <ul>
        <li v-for="(item, index) in lists" :key="index">{{item}}</li>
      </ul>
    </div>
    <div>
      <button v-on:click="num+=1"> add 1 </button>
      <span>{{ num }}</span>
      <button v-on:click="greet">greet</button>
      <input type="text" v-on:keyup.enter="showAlert">
      <button v-on:click="addarr">addttr</button>
    </div>
    <p>dadadad</p>
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
      url: "#",
      boolean: true,
      lists: ['da', 'xiao'],
      num: 1,
      name: 'fuck',
    }
  },
  methods: {
    greet: function(){
      alert('hello ' + this.name)
    },
    showAlert: function(){
      alert('key up on enter')
    },
    addarr(){
      this.lists.push("dada");
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
