<template>
      <div class="center_main">
        <div class="head">
            <div class="brand"></div>
            <h1>登录</h1>
        </div>
        <div class="form">
            <div class="user_input">
                <input class="input" type="text" v-model="username" placeholder="用户名">
                <input class="input" type="password" v-model="password" placeholder="密码">
            </div>
            <div class="remember">
                <input class="checkbox" type="checkbox"><span class="remember_text">30天内记住我</span>
            </div>
            <div class="login_button"  v-on:click="userLogin"><a href="#">登录</a></div>
        </div>
        <ul class="account1">
            <li class="no_account">没有账号？</li>
            <li class="create_account"><a href="#">创建账户</a></li>
        </ul>
    </div>
</template>

<script>
import store from '../vuex/store.js'
export default {
  name: 'login.vue',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  store,
  methods: {
    userLogin () {
      let _this = this
      _this.$axios({
        method: 'post',
        url: 'http://107.150.124.179:8081/api/v1/users/login',
        data: _this.qs.stringify({ // 这里是发送给后台的数据
          userName: _this.username,
          password: _this.password
        })
      }).then((response) => { // 这里使用了ES6的语法
        if (response.status === 200) {
          console.log('OK请求成功返回的数据:' + JSON.stringify(response)) // 请求成功返回的数据
          _this.$store.commit('SET_TOKEN', response.data.data.token)
          // _this.$store.commit('GET_USER', response.data.data.userName) 这两行的目的是为了将token和username存到状态管理中，以便各组件调用，可是现在username的值取不到
          window.localStorage.setItem('token', response.data.data.token)
          _this.$router.push({path: '/index'})
        }
      }).catch((error) => {
        console.log('No请求失败返回的数据:' + error) // 请求失败返回的数据
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
    background-color: #f3f3f3;
}
/*中间根样式begin*/
.center_main{
    margin: 0 auto;
    width: 385px;
    /*background-color: #bbffaa;*/
}
.head{
    margin: 68px 0 26px 0;
    text-align: center;
    color: #aaaaaa;
}
.head h1{
    font-size: 32px;
    font-weight: 300;
    line-height: 36px;
    margin-bottom: 6px;
    color: #6a6a6a;
}
.brand{
    height: 68px;
    margin-bottom: 20px;
    background: url("../assets/elephant.png") no-repeat center top;
    background-size: 68px 68px;
}
.form{
    box-sizing: border-box;
    padding: 25px 32px 32px 32px;
    margin: 20px 0;
    height: 265px;
    background-color: #ffffff;
    border: 1px solid #dedede;
    border-radius: 2px;
}
.user_input{
    margin-bottom: 24px;
}
.input{
    height: 38px;
    width: 100%;
    margin-bottom: 12px;
    border-radius: 8px;
    border: 1px solid #cacaca;
}
.checkbox{
    width: 11px;
    height: 11px;
    border: 1px solid #808080 ;
}
.remember_text{
    font-size: 11px;
    color: #747474;
}
.login_button{
    height: 44px;
    margin-top: 19px;
    line-height: 44px;
    text-align: center;
    border: 1px solid #1fae52;
    border-radius: 5px;
    font-size: 15px;
    background-color: #2dbe60;
    color: #ffffff;
}

.account1 li{
    padding-top: 12px;
    text-align: center;
}
.no_account{
    font-size: 11px;
    color: #747474;
}
.create_account a{
    font-size: 14px;
    color: #2dbe60;
}
/*中间根样式end*/

</style>
<style src="../assets/reset.css"></style>ß
