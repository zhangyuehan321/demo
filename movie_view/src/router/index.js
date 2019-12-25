import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import NewHello from '@/components/NewHello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../pages/index'], resolve),
      meta: {
        title: 'home'
      }
    },
    {
      path: '/login',
      component: resolve => require(['../pages/login'], resolve),
      meta: {
        title: 'login'
      }
    }
    // {
    //   path: '/NewHello',
    //   name: 'NewHello',
    //   component: NewHello
    // }
  ]
})
