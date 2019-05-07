import Vue from 'vue'
import Router from 'vue-router'
import loginPage from '../loginPage'
import tableShow from '../pages/tableShow'
import prewPicture from '../pages/prewPicture'
import baiDuMap from '../pages/baiDuMap'
Vue.use(Router)
const  _import=require('../pages/baiDuMap')
// const context = require.context('', false, /.*\.(jpg|png)$/);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginPage',
      component: loginPage
    },
    {
      path: '/src/pages/tableShow',
      name: 'tableShow',
      component: tableShow
    },
    {
      path: '/src/pages/prewPicture',
      name: 'prewPicture',
      component: prewPicture
    },
    {
      path: '/src/pages/baiDuMap',
      name: 'baiDuMap',
      component: baiDuMap,
    },
  ]
})

// const images = context.keys().map(v => context(v))
// const requireComponent = require.context(
//         // 其组件目录的相对路径
//         '../s',
//         // 是否查询其子目录
//         false,
//         // 匹配基础组件文件名的正则表达式
//         /Base[A-Z]\w+\.(vue|js)$/
// )

//
// requireComponent.keys().forEach(fileName => {
//     // 获取组件配置
//     const componentConfig = requireComponent(fileName)
//
//     // 获取组件的 PascalCase 命名
//     const componentName = upperFirst(
//             camelCase(
//                     // 剥去文件名开头的 `./` 和结尾的扩展名
//                     fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
//             )
//     )
//
//     // 全局注册组件
//     Vue.component(
//             componentName,
//             // 如果这个组件选项是通过 `export default` 导出的，
//             // 那么就会优先使用 `.default`，
//             // 否则回退到使用模块的根。
//             componentConfig.default || componentConfig
//     )
// })
// const requireComponent  = require.context('../src/pages', false, /\.vue$/);
// const routes = requireComponent.keys().map(fileName => {
//     // 获取组件配置
//     const componentConfig = requireComponent(fileName);
//
//     // 剥去文件名开头的 `./` 和结尾的扩展名
//     const componentName = fileName.replace(/\.\w+$/, '$0');
//
//     // 全局注册组件
//     const component = Vue.component(
//             componentName,
//             // 如果这个组件选项是通过 `export default` 导出的，
//             // 那么就会优先使用 `.default`，
//             // 否则回退到使用模块的根。
//             componentConfig.default || componentConfig
//     );
//
//     return {
//         path: `/${componentName}` ,
//         name: componentName,
//         component,
//     }
// });
// console.log(routes)
//
// Vue.use(Router);
//
// export default new Router({
//     routes,
// })
// console.log(routes)