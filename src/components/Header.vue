<template>
  <div class="headArea">
    <h2 v-text="title" style="margin:0"></h2>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      title: "welcome to MYMarket"
    };
  },
  created() {},
  mounted() {
    methods: {
    }
  }
};
</script>
<style scoped>
.headArea {
  margin: 0;
  width: 100%;
  height: 100px;
  line-height: 100px;
  background-color: #e7d8d5;
}
</style>

