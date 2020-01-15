<template>
  <div class="main_body_2">
    <div class="main_body_2_message">
      <span class="message_note"><div class="note_icon"></div><div class="first-note">我的第一个笔记本</div><img src="../assets/arrow_down_bottom.png"></span>
      <span class="message_label"><div class="new_label"></div>新建标签...</span>
    </div>
    <div class="main_body_2_detail">
      <div class="note_detail_title" contenteditable="true">{{current.title}}</div>
      <pre class="note_detail_content" contenteditable="true" v-text="current.content"></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'note.vue',
  data () {
    return {
      currentArticle: {},
      resTitle: null,
      resContent: null
      // hoverIndex: -1, // 菜单hover索引
      // activeLinkId: 0 // 当前激活的菜单id
    }
  },
  props: {
    current: {
      type: Object
    }
  }
}
</script>

<style scoped>
  .main_body_2{
    flex: auto;
    margin: 0 76px;
  }
  .main_body_2_message{
    height: 20px;
    margin: 7px 0 27px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #ececec;
    font-size: 12px;
  }
  .message_note{
    display: inline-block;
  }
  .note_icon{
    display: inline-block;
    width: 12px;
    height: 13px;
    margin-top: 7px;
    background: url("../assets/note_icon.png");
  }
  .first-note{
    display: inline-block;
    padding: 0 8px;
    line-height: 30px;
    font-size: 12px;
    font-weight: 500;
    color: #606060;
  }
  .new_label{
    display: inline-block;
    width: 12px;
    height: 13px;
    background: url("../assets/new_label.png") no-repeat bottom left;
  }
  .message_label{
    color: #c4c4c4;
  }
  .main_body_2_detail{
    height: calc(100% - 64px);
    /*background-color:#5e64a1;*/
  }
  .note_detail_title{
    font-family: caecilia, times, serif;
    font-size: 28px;
    font-weight: 300;
    height: 35px;
    margin-bottom: 13px;
    color: #2dbe60;
  }
  .note_detail_content{
    font-family: gotham, helvetica, arial, sans-serif;
    font-size: 14px;
    height: 100%
  }
</style>
