import Vue from 'vue'
import Vuex from 'vuex'

//use中间件使用vuex
Vue.use(Vuex)


export const store =new Vuex.Store({
    //state存储数据
    state:{
        products:[
            {id:1,name:'可乐',price:5},
            {id:2,name:'雪碧',price:4},
            {id:3,name:'果粒橙',price:4.5}
          ]
    },
    //getters获取数据
    getters:{
        //需要传一个state
        // saleProducts:(state)=>{
        //     var saleProducts=state.products.map(
        //     item=>{
        //         return {
        //             id:item.id,
        //             name:item.name,
        //             price:item.price-1
        //         };
        //     });
        //     //这里需要返回一个saleProducts
        //     return saleProducts;
        // }
    },
    //mutations改变state的唯一方法
    mutations: {

        //mutation里面state必须在payload前面
        reducePrice:(state,payload)=>{

            // state.products.forEach(product=>{
            //     product.price-=0.1;
            // });
            //    传递一个payload值
        console.log(state.products[payload]);
        state.products[payload].price-=0.1;
             
            
         //    console.log(state.products[index]);
            
        },
        text:(state,index)=>{
            console.log(state.products[index]);
        },
        addPrice:(state,index)=>{
            state.products[index].price+=0.1;
        }
    },
    // 进行异步操作以及传递参数
    actions:{
        reducePrice:(context,payload)=>{
            setTimeout(function(){
                // context类似于this.$store
                context.commit("reducePrice",payload)
            },2000)
        }
    }
});