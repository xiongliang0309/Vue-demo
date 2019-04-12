<!--1.模板：HTML结构-->
<template>
  <div id="app">
      <app-header ></app-header>
      <!-- 绑定一个content，父组件app给子组件传值 -->
       <app-content v-bind:content="content"></app-content>
      <app-footer></app-footer>
     
  </div>
</template>


<!--2.行为：处理逻辑-->
<script>

import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
export default {
  name: 'App',
  data(){
    return {
       content:[
            {name:'xiongliang',position:'实习技术顾问',show:false},
            {name:'chaoqian',position:'实习技术顾问',show:false},
            {name:'liuting',position:'实习技术顾问',show:false},
            {name:'jinmingyang',position:'实习技术顾问',show:false},
            {name:'zhangqingqing',position:'实习技术顾问',show:false},
            {name:'huangbin',position:'技术顾问',show:false},
            {name:'zhanghui',position:'实习技术顾问',show:false},
            {name:'wuzhiyuan',position:'实习技术顾问',show:false},
            {name:'wangjiacheng',position:'技术顾问',show:false},
        ]
    }
  },
  components:{
    "app-header":Header,
    "app-footer":Footer,
    "app-content":Content
  }
}
</script>


<!--3.样式：解决样式-->
<style>

</style>
