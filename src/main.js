// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import install from "./tools/touch"
Vue.use(install)
// Vue.use(baiduMap,{
//   ak: 'nG5po01QEUlWmijopTI6Dk3SdHMTKHUk',
// })
Vue.use(preview)
// import VueCountUp from 'vue-countupjs'
// Vue.use(VueCountUp)
Vue.use(ElementUI)
Vue.config.productionTip = false
import axios from 'axios'
Vue.prototype.$ajax = axios
// import qs from 'qs';//数据格式转化qs.stringify(data)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
