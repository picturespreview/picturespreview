<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      // fn:function(){
      //   console.log("名别")
      // }
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
  }

  html, body, div {
    margin: 0;
    padding: 0;
  }
  /* 表格表头错位问题 */
  .el-table th.gutter {
    display: table-cell !important;
  }
  .BMap_cpyCtrl {
      display: none;
  }

  .anchorBL {
      display: none;
  }
</style>
