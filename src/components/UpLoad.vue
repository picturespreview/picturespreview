<template>
  <div>
    <el-upload
      action="127:0:0:1:8080"
      list-type="picture-card"
      :data='userData'
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <!-- <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt>
    </el-dialog> -->
    <img src="../../static/img/backgroundAll.jpg" preview>
  </div>
</template>
<script>
import VueCountUp from 'vue-countupjs'

export default {
  name: "UpLoad",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      userData:'',
    };
  },
  created() {
    if (this.$route.params) {
      this.userData=(this.$route.params.data);
      console.log(this.userData);
    }
    else{
      console.log(111)
    }
  },
  mounted() {
  
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  },
  components:{
    Mycountup:VueCountUp,
  },
};
</script>
<style></style>