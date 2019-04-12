<template>
  <div id="app">
      <TranslateInput v-on:submitcontent="translatecontent"></TranslateInput>
      <TranslateOutput v-text="result"></TranslateOutput>
  </div>
</template>

<script>
import TranslateInput from './components/TranslateInput.vue'
import TranslateOutput from './components/TranslateOutput.vue'
export default {
  name: 'App',
  data () {
    return {
      result:""
    }
  },
  components: {
      TranslateInput:TranslateInput,
      TranslateOutput:TranslateOutput,
  },
  methods:{
    translatecontent:function(text,language){
     // alert(text)
     //http请求接口，key为密钥，text为要翻译的内容
     this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190409T121445Z.9a64187e8cfe46fd.1af219a06279ffd965af165d20d0d0c938523bd7&lang='+language+'&text='+text)
        .then((response)=>{
          //console.log(response);
          //console.log(response.body.text[0]);
          this.result=response.body.text[0]
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
