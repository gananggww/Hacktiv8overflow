import Vue from 'vue'
import Router from 'vue-router'
import House from '@/components/House'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Timeline from '@/components/Timeline'
import Questiondetail from '@/components/Questiondetail'
import Questionform from '@/components/Questionform'
import Questionself from '@/components/Questionself'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/myquest',
      component: Questionself
    }, {
      path: '/login',
      component: Login
    }, {
      path: '/register',
      component: Register
    }, {
      path: '/',
      component: House,
      children: [{
        path: 'quest',
        component: Questionform
      }, {
        path: '',
        component: Timeline
      }, {
        path: ':username/:id/:slug',
        component: Questiondetail,
        props: true
      }]
    }
  ]
})
