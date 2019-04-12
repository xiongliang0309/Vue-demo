<template>
    <div id="contents">
        <ul>
            <li v-for="user in content" v-on:click="user.show=!user.show">
                <h2>{{user.name}}</h2>
                <h3 v-show="user.show">{{user.position}}</h3> 
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'app-content',
//   拿到父组件传过来的属性
  props:{
      content:{
          type:Array,
          required:true
      }
  },
  data(){
    return{
       
    }
  }
}
</script>

<style scoped>
    #contents{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    /*flex布局 */
    display: flex;
    /* flex-wrap:一行排不下就换行 */
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    /* 等分空间 */
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
