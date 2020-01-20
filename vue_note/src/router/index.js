import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import HomeIndex from '@/pages/HomeIndex'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeIndex',
      component: HomeIndex
    },
    {
      path: '/index',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
