<template>
    <div class="container">
      <sidebar :lists=this.article_lists></sidebar>
      <div id="stage" class="stage">
        <top-toolbar></top-toolbar>
        <!--主体内容begin-->
        <div class="main_body">
          <note-list :lists=this.article_lists @transforCurrent="getCurrentArticle"></note-list>
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
      article_lists: [],
      currentArticle: {}
    }
  },
  store,
  methods: {
    init: function () {
      this.$axios.get('http://107.150.124.179:8081/api/v1/articles/', {
        headers: {
          'token': window.localStorage.getItem('token')
        }
      }).then((res) => { // 这里必须使用箭头函数，否则this为undefined
        this.article_lists = res.data
        console.log(res)
        // console.log(this.article_lists)
        // 如果token失效，跳转到登录页面
      })
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
