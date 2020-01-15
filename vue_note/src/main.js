// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios' // npm install axios进行安装,为项目提供http请求，地址:https://github.com/axios/axios
import qs from 'qs' // qs是一个npm仓库所管理的包,可通过npm install qs命令进行安装，地址: https://www.npmjs.com/package/qs
Vue.prototype.$axios = axios // 全局注册，使用方法为: this.$axios
Vue.prototype.qs = qs // 全局注册，使用方法为: this.qs

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
