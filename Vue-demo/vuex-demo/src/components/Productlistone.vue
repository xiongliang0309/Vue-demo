<template>
  <div id="product-list-one">
     <form v-on:submit="formSubmit">
      <input type="text" placeholder="输入商品信息" v-model="newname">
      <!-- v-model.number将自动的将用户输入值转换为数值类型 -->
      <input type="text" placeholder="输入商品单价" v-model.number="newprice">
      <input type="submit" value="提交">
    </form>
      productlistone
      <ul >
          <!-- 渲染的是saleProducts ，而不是products-->
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
    //computed函数来获取store的数据
   computed: {
       products(){
           return this.$store.state.products;
       },
       //打折后的价格，渲染到页面中v-for的时候是v-for的saleProducts
    //    saleProducts(){

    /*=============通过...mapgetters来实现this.%store.getters.... =====================*/
            // ...mapGetters([
            //     "saleProducts",
            //     "...",
            //     "..."
            // ])
   },
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
//        },

   methods: {
           reducePrice:function(index){
                //分发一个action处理成异步事件
                this.$store.dispatch("reducePrice",index);
                //   同步的commit
                // this.$store.commit('reducePrice',index);   
                //        this.$store.state.products.forEach(product=>{
                //            product.price-=0.1;
                //        })
                // console.log(this.$store.state.products[index]);
                // this.$store.state.products[index].price-=0.1;
            },
            addPrice:function(index){
                this.$store.commit('addPrice',index)
                // this.$store.state.products[index].price+=0.1;
            },
            formSubmit:function(e){
                console.log(this.newname);
                console.log(this.newprice);
               this.$store.state.products.push({
                   id: new Date().getTime(),
                   name:this.newname,
                   price:this.newprice
               });
               this.newname="";
               this.newprice="";
               e.preventDefault();
            }
    }
}

</script>

<style>

</style>
