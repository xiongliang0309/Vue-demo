<template>
    <footer>
        <p>{{copyright}}</p>
    </footer>
</template>

<script>
export default {
  name: 'app-footer',
  data(){
    return{
        copyright:"Copyright @hand-china.com 2019"
    }
  }
}
</script>

<style scoped>
    footer{
        background:#222;
        padding: 1px;
    }
    p{
        color:white;
        text-align: center;
    }
</style>
