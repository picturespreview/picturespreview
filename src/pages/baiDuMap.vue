<template>
  <div>
    <myHeader></myHeader>
    <div style="display:flex">
      <myAsider></myAsider>
      <div class="contentArea">
        <myBDMap></myBDMap>
      </div>
    </div>
  </div>


</template>

<script>
  import Header from '../components/Header'
  import Asider from '../components/Asider'
  import BDMap from '../components/BDMap'
  export default {
    name: "baiDuMap",
    data() {
      return {}
    },
    components: {
      myHeader: Header,
      myAsider: Asider,
      myBDMap:BDMap,
    }
  }
</script>

<style scoped>

</style>
