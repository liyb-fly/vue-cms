// 入口文件
import Vue from 'vue'

import app from "./App.vue"

//导入路由包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//按需导入组件
import { Header} from 'mint-ui'

//导入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

Vue.component(Header.name, Header)

//创建一个vue实例对象
var vm = new Vue({
    el:"#app",
    render:c=>c(app)

})