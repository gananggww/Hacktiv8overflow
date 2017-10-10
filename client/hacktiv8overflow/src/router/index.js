import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import login from '@/components/login'
import Home from '@/components/home'
import profile from '@/components/profile'
import questions from '@/components/questions'
import questionbyid from '@/components/questionbyid'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // name: 'Hello',
      component: Home,
      children: [
        {
          path: '',
          component: questions
        }, {
          path: 'ganang/:id',
          component: questionbyid,
          props: true
        }
      ]
    }, {
      path: '/login',
      component: login
    }, {
      path: '/myquest',
      component: profile
    }
  ]
})
