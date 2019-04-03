import Vue from 'vue'
import Router from 'vue-router'
import NavList from '../components/NavList'
import FrontInfo from '../components/front/FrontInfo'
import BackInfo from '../components/back/BackInfo'


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   component: NavList
    // },
    {
      path: '/frontInfo',
      component: FrontInfo
    },
    {
      path: '/backInfo',
      component: BackInfo
    },
  ]
})
