<template>
  <div>
    <myHeader></myHeader>
    <div style="display:flex">
      <myAsider></myAsider>
      <div class="contentArea">
        <myUpLoad></myUpLoad>
      </div>
    </div>
  </div>
</template>
<script>
  import Header from "../components/Header";
  import Asider from "../components/Asider";
  import Upload from "../components/UpLoad";

  export default {
    name: "updataPage",
    data() {
      return {};
    },
    components: {
      myHeader: Header,
      myAsider: Asider,
      myUpLoad: Upload
    }
  };
</script>
<style scoped>
  .contentArea {
    margin: 5px 0 0 0;
    display: block;
    width: 100%;
    background-color: lightgray;
    height: calc(100vh - 105px);
    overflow-x: hidden;
    overflow-y: scroll;
  }
</style>
