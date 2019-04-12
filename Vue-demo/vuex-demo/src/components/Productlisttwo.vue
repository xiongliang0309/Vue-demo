<template>
  <div id="product-list-two">
      productlisttwo
      <ul >
          <li v-for="(product,index) in products" :key="product.id">
              {{product.name}}:${{product.price}}
              <button @click="reducePrice(index)">降价</button>
              <button @click="addPrice(index)">涨价</button>

          </li>
      </ul>
  </div>
</template>

<script>

export default {
    computed: {
       products(){
           return this.$store.state.products;
       },
       //打折后的价格，渲染到页面中v-for的时候是v-for的saleProducts
    //    saleProducts(state){
    //        return this.$store.getters.saleProducts;
/*======================将这个方法封装到getters里面================*/
        //    var saleProducts=this.$store.state.products.map(
        //     item=>{
        //         return {
        //             id:item.id,
        //             name:item.name,
        //             price:item.price-1
        //         };
        //     });
        //============这里需要返回一个新的数组saleProducts=============
        //     return saleProducts;
    //    },
   },
   methods: {
           reducePrice:function(index){
                //        this.$store.state.products.forEach(product=>{
                //            product.price-=0.1;
                //        })
                console.log(this.$store.state.products[index]);
                this.$store.state.products[index].price-=0.1;
            },
            addPrice:function(index){
                this.$store.state.products[index].price+=0.1;
            }
    }
}
</script>

<style>

</style>
