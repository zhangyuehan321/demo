<template>
  <div class="main_body_1">
    <div class="main_body_1_message">
      6条笔记
      <span class="message_option">选项<img class="message_option_image" src="../assets/arrow_down_middle.png"></span>
    </div>
    <div class="main_body_1_list">
      <ul>
        <li class="article_list_li"
            v-for="(article, index) in lists"
            v-bind:key="index"
            @click="switchActiveLink(article)">
          <!--:class="{'larticle_list_li_active': item.id == activeLinkId,'article_list_li_hover':index==hoverIndex}"-->
            <!--@mouseover="hoverIndex = index"-->
            <!--@mouseout="hoverIndex = -1" >-->
          <p class="list_li_title">{{article.title}}</p>
          <p class="list_li_content">{{article.content}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import store from '../vuex/store.js'
export default {
  // inject: ['reload'],
  name: 'noteList.vue',
  data () {
    return {
      currentArticle: {}
      // hoverIndex: -1, // 菜单hover索引
      // activeLinkId: 0 // 当前激活的菜单id
    }
  },
  // mounted () {
  //   this.reload()
  // },
  props: {
    lists: {
      type: Array
    }
  },
  methods: {
    switchActiveLink: function (article) {
      // 获取点击对象
      this.currentArticle = article
      this.$emit('transforCurrent', this.currentArticle)
      alert('当前对象的内容：' + JSON.stringify(this.currentArticle))
    }
  }
}
</script>

<style scoped>
  .main_body_1{
    flex: none;
    width: 350px;
    border-right: 1px solid #ececec;
  }
  .main_body_1_message{
    box-sizing: border-box;
    height: 46px;
    padding: 23px 25px 11px 25px;
    color: #ababab;
    font-size: 12px;
  }
  .message_option{
    float: right;
    color: #ababab;
  }
  .message_option_image{
    margin: 2px 0 0 4px;
  }
  .main_body_1_list{
    height: calc(100% - 46px);
  }
  .article_list_li{
    height: 120px;
    box-sizing: border-box;
    padding: 12px 24px 15px 24px;
    overflow: hidden;
    background-color: coral;
    margin-bottom: 2px;
  }
  .list_li_title{
    font-family: caecilia, times, serif;
    font-size: 16px;
    font-weight: 400;
    color: #4a4a4a;
    margin-bottom: 10px;
    max-height: 40px;
    overflow: hidden;
  }
  .list_li_content{
    font-family: gotham, helvetica, arial, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
  }
</style>
