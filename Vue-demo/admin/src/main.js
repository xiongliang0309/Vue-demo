// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.config.productionTip = false

Vue.use(VueRouter)


//设置路由
const router=new VueRouter({
  mode:"history",
  base:_dirname,
  routes:[
    {path:"/",component:Customer},
    {path:"/about",component:About}
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  template:`
      <div id="app"> 
        <router-link to="/about">关于</router-link>
        <router-view></router-view>
  
  `
}).$mount("#app")
