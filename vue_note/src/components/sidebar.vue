<template>
  <aside class="sidebar">
    <div class="logo">
      <div class="logo_image" ></div>
    </div>
    <div class="note_operation">
      <div class="operation_add">
        <img class="note_operation_image_add" src="../assets/add_before.png" data-src="../assets/add_after.png" @click="creatArticle">
        <!--<div class="title_position">-->
          <!--<div class="angle"></div>-->
          <!--<span class="display_title">新建笔记</span>-->
        <!--</div>-->
      </div>
      <div class="operation_add">
        <img class="note_operation_image_search" src="../assets/search_before.png" data-src="../assets/search_after.png">
        <div class="title_position">
          <div class="angle"></div>
          <span class="display_title">搜索</span>
        </div>
      </div>
      <div class="operation_add">
        <img class="note_operation_image_work" src="../assets/work_before.png" data-src="../assets/work_after.png">
        <div class="title_position">
          <div class="angle"></div>
          <span class="display_title">工作群聊</span>
        </div>
      </div>
      <!--<img class="note_operation_image_add" src="img/add_before.png" data-src="img/add_after.png">-->
      <!--<img class="note_operation_image_search" src="img/search_before.png" data-src="img/search_after.png">-->
      <!--<img class="note_operation_image_work" src="img/work_before.png" data-src="img/work_after.png">-->
    </div>
    <div class="logo_classify">
      <img class="logo_classify_image_star" src="../assets/star_before.png" data-src="../assets/star_after.png">
      <img class="logo_classify_image_note" src="../assets/note_before.png" data-src="../assets/note_after.png">
      <img class="logo_classify_image_notebook" src="../assets/notebook_before.png" data-src="../assets/notebook_after.png">
      <img class="logo_classify_image_label" src="../assets/label_before.png" data-src="../assets/label_after.png">
    </div>
    <div class="account">
      <div class="account_image"></div>
    </div>
  </aside>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'sidebar.vue',
  data () {
    return {}
  },
  // props: {
  //   lists: {
  //     type: Array
  //   }
  // },
  methods: {
    creatArticle: function () {
      // let data = {'title': `Article${this.lists.length}`, 'content': String(Date.now()), starStatus: 0}
      // let data = new URLSearchParams()
      // data.append('title', '4')
      // data.append('content', '4')
      // data.append('starStatus', '0')

      // can't reload the lists
      let data = {'title': 'qwer', 'content': '1234', 'starStatus': '1'}
      this.$axios({
        method: 'post',
        url: `http://107.150.124.179:8081/api/v1/articles/`,
        headers: {
          'token': window.localStorage.getItem('token')
          // 'Content-Type': 'application/json'
        },
        data: this.qs.stringify(data)
      }).then(res => {
        this.$articleList.push(data) // push是为了新增文章后列表也可以刷新，显示新增项（响应式）https://cn.vuejs.org/v2/guide/list.html数组更新检测
        console.log('res=>', res)
      })
    }
  }
}
</script>

<style scoped>
  .sidebar{
    flex: none;
    box-sizing: border-box;
    width: 72px;
    height: 100%;
    padding: 18px;
    border-right:1px solid #ececec;
    background-color: #f8f8f8;
  }
  .logo{
    padding-bottom: 18px;
  }
  .logo_image{
    width: 36px;
    height: 36px;
    background: url("../assets/brand.png");
  }
  /*左下角的账户样式*/
  .account{
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 18px;
    border-top:1px solid #ececec
  }
  .account_image{
    width: 36px;
    height: 36px;
    border-radius: 18px;
    background: url("../assets/head.png");
  }

  .note_operation{
    padding: 9px 0;
  }
  [class^=note_operation_image]{
    padding: 3px 0;
  }
  .note_operation_image_before{
    animation: imgFadeFromLeft .5s ;
  }
  .note_operation_image_after{
    animation: imgFadeFromRight .5s ;
  }
  @keyframes imgFadeFromLeft {
    from{
      opacity: 0;
    }to{
       opacity:1;
     }
  }
  @keyframes imgFadeFromRight {
    from{
      opacity: 0;
    }to{
       opacity:1;
     }
  }
  .logo_classify{
    padding: 45px 0;
  }
  [class^=logo_classify_image]{
    padding: 3px 0;
  }
  .operation_add{
    position: relative;
  }
  .title_position{
    position: absolute;
    left: 38px;
    top:11px;
    display: flex;
  }
  .angle{
    flex: none;
    width: 4px;
    height: 8px;
    align-self: center;
    background: url("../assets/angle.png");
  }
  .display_title{
    flex: auto;
    font-size: 12px;
    white-space: nowrap;
    background-color: #606060;
    padding: 4px 7px;
    border-radius: 3px;
  }
</style>
