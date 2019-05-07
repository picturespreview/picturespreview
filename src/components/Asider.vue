<template>
  <div class="asideArea">
    <a
      href="javascript:;"
      v-for="(item, index) in itemData"
      :key="index"
      v-text="parseInt(index)+1+'.'+item.name"
      @click="pageSwith(item.key)"
    ></a>
    
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Asider",
  data() {
    return {
      itemData: ""
    };
  },
  created() {},
  mounted() {
    axios.get("static/data/data.json").then(res => {
      this.itemData = res.data.titleItem;
      // console.log(res.data.titleItem);
    });
  },
  methods: {
    pageSwith:function(val){
      this.$router.push({'name':val});
    }
  }
};
</script>
<style scoped>
.asideArea {
  margin: 5px 0 0 0;
  width: 200px;
  height: calc(100vh - 105px);
  background-color: #f2f2f2;
}
.asideArea a{
    display: block;
    width:180px;
    height: 50px;
    line-height: 40px;
    text-decoration: none;
    font-size:25px;
}
</style>