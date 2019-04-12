<template>
  <div id="translateinput">
    <form v-on:submit="formSubmit">
      <h1>在线翻译！！</h1>
      <h4>简单/易用/方便</h4>
      <input type="text" placeholder="输入要翻译的内容" v-model="content">
      <select v-model="language">
        <option value="en">English</option>
        <option value="ru">Russian</option>
        <option value="ko">Korean</option>
        <option value="ja">Janpenese</option>
      </select>
      <input type="submit" value="翻译">
    </form>
  </div>
</template>

<script>
export default {
  name: "TranslateInput",
  data() {
    return {
      content: "",
      language:"",
    };
  },
  methods: {
    formSubmit: function(e) {
      // alert(this.content);
      //$emit注册一个事件，将content和language传递给父组件
      this.$emit("submitcontent", this.content,this.language);   
      e.preventDefault();
    }
  }
};
</script>

<style>

</style>
