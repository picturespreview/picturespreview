<template>
    <div>
        <div id="BDMap"></div>
    </div>
</template>

<script>
    // import BMap from 'BMap'

    export default {
        name: "BDMap",
        data() {
            return {
                center: {lng: 0, lat: 0},
                zoom: 6
            }
        },
        methods: {
            // baiduMap: function () {
            //     var map = new BMap.Map("BDMap");          // 创建地图实例
            //     var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
            //     map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
            // }
        },
        mounted(){
            var map = new BMap.Map("BDMap");
            var point = new BMap.Point(116.404, 39.915);
            map.centerAndZoom(point, 15);
        },
    }
</script>

<style scoped>
   #BDMap {
        width: calc(100vw - 200px);
        height: calc(100vh - 100px);
    }

</style>
