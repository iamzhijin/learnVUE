// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',  // 绑定id 属性
  router,
  components: { App }, // 绑定App组件
  template: '<App/>'  // 组件注入
})
