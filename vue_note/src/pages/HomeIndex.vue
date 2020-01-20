<template>
    <div class="container">
      <sidebar></sidebar>
      <div id="stage" class="stage">
        <top-toolbar></top-toolbar>
        <!--主体内容begin-->
        <div class="main_body">
          <note-list @transforCurrent="getCurrentArticle"></note-list>
          <note :current="this.currentArticle"></note>
        </div>
        <!--主体内容end-->
      </div>
    </div>
</template>
<!--页面需要显示 userName-->
<!--登录按钮post得到了 userName和token，路由指向home页面-->
<!--home页面需要get方式 token-->

<!--到底什么需要全局的值-->
<!--点击List中的某个note，Note显示具体信息，这是传的id吗？这是同步还是异步？需要用vuex吗？-->
<!--token需要用vuex存吗？-->
<!--index页面是否需要存在？-->
<script>
import Vue from 'vue'
import store from '../vuex/store.js'
import Sidebar from '../components/sidebar'
import TopToolbar from '../components/topToolbar'
import NoteList from '../components/noteList'
import Note from '../components/note'
export default {
  name: 'index.vue',
  components: {TopToolbar, Sidebar, NoteList, Note},
  data () {
    return {
      // article_lists: [],
      currentArticle: {}
    }
  },
  store,
  methods: {
    // 使用 asyns/await 将 axios 异步请求同步化,使全局变量$articleList有值
    init: async function () {
      let res = await this.$axios.get('http://107.150.124.179:8081/api/v1/articles/', {
        headers: {
          'token': window.localStorage.getItem('token')
        }
      })
      // 把res.data转成数组赋值给article_lists。res.data是对象，把它直接赋值给数组会报错"Invalid prop: type check failed for prop "lists". Expected Array, got Object"
      let data = []
      for (let i in res.data) {
        data.push(res.data[i])
      }
      Vue.prototype.$articleList = data
      console.log('list：')
      console.log(this.$articleList)
      // 如果token失效，跳转到登录页面
    },
    getCurrentArticle (msg) {
      this.currentArticle = msg
    }
  },
  created: function () {
    this.init()
  }
}
</script>

<style scoped>
  .container{
    display: flex;
    align-items: flex-start;
    /*以下代码使flex元素垂直满屏显示*/
    position: absolute;
    bottom: 0;
    top:0;
    left:0;
    right:0;
  }
  .stage{
    /*flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。*/
    /*该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)*/
    flex:auto;
    height: 100%;
    background-color: #ffffff;
  }
  .main_body{
    display: flex;
    height: calc(100% - 52px);
  }
</style>
<style src="../assets/reset.css"></style>
<!--新增：只需把默认值post到接口，list默认渲染，还需传值到note页面获取新增的，并渲染-->
<!--修改：需要加一个保存的按钮吗？加在哪里？title和content应该用什么容器？目前title是input，content是div-->
<!--要不要把布局改变，取消toptoolbar？-->
<!--要把之前的逻辑破坏吗？各组件都可访问改变都current值应该怎么设置改变？-->
<!--movie_view的问题可能是github上的警告没有处理https://github.com/zhangyuehan321/demo/network/alerts-->
