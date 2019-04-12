<template>
  <div id="app">
    <product-list-one ></product-list-one>
   
    
  </div>
</template>

<script>
import Productlistone from './components/Productlistone.vue'
import Productlisttwo from './components/Productlisttwo.vue'
export default {
  name: 'App',
   components: {
    'product-list-one':Productlistone,
    
  },
  data () {
    return {
      
    }
  },
 
}
</script>

<style>

</style>
