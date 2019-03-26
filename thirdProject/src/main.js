// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios' // 引入axios

Vue.prototype.$axios = Axios // axios挂载在Vue 对象
Vue.prototype.HOME = '/api'  // HOME 是一个定值 默认指向localhost 修为为 /api 并在index.js 中配置允许跨域
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
