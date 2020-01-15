<template>
  <!--顶层工具栏begin-->
  <div class="container_top_toolbar">
    <!--笔记列表上方的工具栏，顶部左侧工具栏begin-->
    <div class="toolbar_on_list">
      <span class="note_text">笔记</span>
      <button class="webpage_cut_button">
        <img src="" alt="">
        <span class="webpage_cut">网页剪藏</span>
      </button>
    </div>
    <!--笔记列表上方的工具栏，顶部左侧工具栏end-->
    <!--笔记编写上方的工具栏，顶部右侧工具栏begin-->
    <div class="toolbar_on_note">
      <div class="toolbar_detail_1">
        <ul>
          <li class="toolbar_detail_image"><img src="../assets/remind_before.png" alt=""></li>
          <li class="toolbar_detail_image"><img src="../assets/shortcut_before.png" alt=""></li>
          <li class="toolbar_detail_image"><img src="../assets/note_message_before.png" alt=""></li>
          <li class="toolbar_detail_image"><img src="../assets/delete_before.png" alt=""></li>
          <li class="toolbar_detail_image"><img src="../assets/more_before.png" alt=""></li>
        </ul>
      </div>
      <div class="toolbar_detail_2">
        <ul>
          <li class="toolbar_detail_button"><button class="upgrade">升级</button></li>
          <li class="toolbar_detail_button"><button class="share">共享</button></li>
          <li class="toolbar_detail_button"><button class="extend"></button></li>
        </ul>
      </div>
    </div>
    <!--笔记编写上方的工具栏，顶部右侧工具栏end-->
  </div>
  <!--顶层工具栏end-->
</template>

<script>
export default {
  name: 'topToolbar.vue'
}
</script>

<style scoped>
  /*顶层工具栏begin*/
  .container_top_toolbar{
    display: flex;
    height: 52px;
  }
  /*笔记列表上方的工具栏，顶部左侧工具栏begin*/
  .toolbar_on_list{
    flex:none;
    padding: 24px 25px 0 24px;
    width: 350px;
    box-sizing: border-box;
    border-right: 1px solid #ececec;
  }
  .note_text{
    font-size: 21px;
    color: #878787;
    font-family: gotham, helvetica, arial, sans-serif;
    font-weight: 300;
  }
  .webpage_cut_button{
    float: right;
    box-sizing: border-box;
    width: 87px;
    height: 29px;
    border: none;
    border-radius: 2px;
    background-color: #2dbe60;
  }
  .webpage_cut{
    font-size: 10px;
  }
  /*笔记列表上方的工具栏，顶部左侧工具栏end*/
  /*笔记编写上方的工具栏，顶部右侧工具栏begin*/
  .toolbar_on_note{
    flex: auto;
    padding: 12px 0;
  }
  .toolbar_detail_1{
    float: left;
    height: 100%;
    padding-left: 18px;
  }
  .toolbar_detail_image{
    float: left;
    width: 24px;
    height: 24px;
    padding-right: 15px;
  }
  .toolbar_detail_2{
    float: right;
    height: 100%;
    margin-right: 16px;
  }
  .toolbar_detail_button{
    float: left;
  }
  .upgrade{
    width: 64px;
    height: 28px;
    border: none;
    border-radius: 0.3em;
    background-color: #ffad17;
    color: #ffffff;
  }
  .share{
    width: 80px;
    height: 28px;
    margin: 0 10px;
    border: 1px solid #c4c4c4;
    border-radius: 0.3em;
    background-color: #ffffff;
    color: #606060;
  }
  .extend{
    width: 30px;
    height: 28px;
    border: 1px solid #2dbe60;
    border-radius: 0.3em;
    background: url("../assets/extend.png") no-repeat center center;
  }
  /*笔记编写上方的工具栏，顶部右侧工具栏end*/
  /*顶层工具栏end*/
</style>
