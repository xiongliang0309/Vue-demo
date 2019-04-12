// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',     //index.html中的id="app"
  components: { App },      //注册组件,来源于import App from './App'
  template: '<App/>'
})

//index.html -> main.js -> App.vue