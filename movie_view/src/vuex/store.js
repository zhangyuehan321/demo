import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // 引入vuex并使用

// state在vuex中用于存储数据
const state = {
  userName: '',
  token: ''
  // 初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录
//  userName: window.sessionStorage.getItem('userName'),
// token: window.sessionStorage.getItem('token')
}

// mutations里放的是方法，用于改变state里面的数据
const mutations = {
  // 将token保存到sessionStorage里，token表示登陆状态
  SET_TOKEN: (state, data) => {
    state.token = data
    // window.sessionStorage.setItem('token', data)
  },
  // 获取用户名
  GET_USER: (state, data) => {
    // 把用户名存起来
    state.userName = data
    // window.sessionStorage.setItem('user', data)
  }// ,
  // 登出
  // LOGOUT: (state) => {
  //   // 登出的时候要清除token
  //   state.token = null
  //   state.userName = null
  //   window.sessionStorage.removeItem('token')
  //   window.sessionStorage.removeItem('userName')
  // }
}

// vuex实例化vuex.store
const store = new Vuex.Store({
  state,
  mutations
})

// 暴露
export default store
